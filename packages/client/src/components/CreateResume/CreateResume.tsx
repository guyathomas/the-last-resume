import React from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import {
  useCreateResumeMutation,
  useGetExistingResumeQuery,
} from "@the-last-resume/graphql";
import { Box, Button, FormHelperText, Typography } from "@material-ui/core";
import { createResumeData } from "./helpers";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLink } from "components/ButtonLink";
import { Typewriter } from "components/Typewriter";
/*
 * Allow spaces at start and end
 * allow -, numbers, letters ( any case )
 */
const slugRegex = /^( *)[A-z0-9]+(?:-[A-z0-9]+)*( *)$/;
const newResumeSchema = Yup.object().shape({
  slug: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .matches(slugRegex, "Only numbers, letters and hyphens are allowed")
    .required("Required"),
});

interface NewResumeValues {
  slug?: string;
}

const ResumeSlugField: React.FC = () => {
  const { setFieldValue, errors } = useFormikContext<NewResumeValues>();
  const inputRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  return (
    <Typography
      marginLeft={0.5}
      minWidth={50}
      ref={inputRef}
      border={errors?.slug && "1px solid red"}
      borderRadius={2}
      display="inline-block"
      contentEditable
      variant="body1"
      component="span"
      color="textPrimary"
      onInput={(event: React.ChangeEvent<any>) => {
        setFieldValue("slug", event?.currentTarget?.innerText);
      }}
    />
  );
};

export const CreateResume: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth0();
  const [createResume, { loading }] = useCreateResumeMutation();
  const { data, loading: isLoadingExistingResume } = useGetExistingResumeQuery({
    variables: {
      userAuthId: user?.["https://hasura.io/jwt/claims"]?.["x-hasura-user-id"],
    },
  });

  if (isLoadingExistingResume) return null;

  if (data?.app_public_resumes.length) {
    const resumeLink = `/resume/${data.app_public_resumes[0].slug}`;
    return (
      <>
        <Typewriter text="Welcome back" />
        <Box marginTop={2} />
        <Typography>{`${process.env.NEXT_PUBLIC_CLIENT_URL}${resumeLink}`}</Typography>
        <Box marginTop={2} />
        <Button component={ButtonLink} href={resumeLink} variant="outlined">
          Edit Resume
        </Button>
      </>
    );
  }

  return (
    <Formik<NewResumeValues>
      initialValues={{}}
      validateOnMount
      validateOnBlur={true}
      validationSchema={newResumeSchema}
      onSubmit={async (values) => {
        if (!values.slug) {
          console.error("No slug provided");
          return;
        }
        const slug = values.slug.toLocaleLowerCase().trim();
        await createResume({
          variables: {
            resumeData: createResumeData(values.slug),
            slug,
          },
        });
        router.push(`/resume/${slug}`);
      }}
    >
      {({ errors, isValid, submitCount }) => (
        <Form>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="h5" color="textPrimary">
              Choose a website name
            </Typography>
            <Box mb={2} />
            <Box>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                {`${process.env.NEXT_PUBLIC_CLIENT_URL}/resume/`}
              </Typography>
              <Field name="slug" as={ResumeSlugField} label="URL Slug" />
            </Box>
            {!!submitCount &&
              Object.values(errors).map((formError) => (
                <FormHelperText error>{formError}</FormHelperText>
              ))}
            <Box mb={2} />
            <Button
              variant="outlined"
              type="submit"
              disabled={loading || !isValid}
            >
              Create Resume
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
