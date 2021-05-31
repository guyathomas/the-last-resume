import React from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import { useCreateResumeMutation } from "@the-last-resume/graphql/dist";
import { Box, Button, FormHelperText, Typography } from "@material-ui/core";
import { createResumeData } from "./helpers";
import { useRouter } from "next/router";
import * as Yup from "yup";

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

interface CreateResumeProps {
  onSave: (slug: string, resume: any) => Promise<any>;
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

export const CreateResume: React.FC<CreateResumeProps> = ({}) => {
  const router = useRouter();
  const [createResume, { loading }] = useCreateResumeMutation();

  return (
    <Formik<NewResumeValues>
      initialValues={{}}
      validateOnBlur={true}
      validateOnChange={false}
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
      {({ errors }) => (
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
            {Object.values(errors).map((formError) => (
              <FormHelperText error>{formError}</FormHelperText>
            ))}
            <Box mb={2} />
            <Button variant="outlined" type="submit" disabled={loading}>
              Get Started
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
