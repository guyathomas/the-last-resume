import React from "react";
import { Field, Form, Formik } from "formik";
import { useCreateResumeMutation } from "@the-last-resume/graphql";
import { Box, Button, FormHelperText, Typography } from "@material-ui/core";
import { createResumeData } from "./helpers";
import { useRouter } from "next/router";
import * as Yup from "yup";

/*
 * Allow spaces at start and end
 * allow -, numbers, letters ( any case )
 */
const slugRegex = /^(\s*)[A-z0-9]+(?:-[A-z0-9]+)*(\s*)$/;
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

export const CreateResume: React.FC = () => {
  const router = useRouter();
  const [createResume, { loading }] = useCreateResumeMutation();

  const slugRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    slugRef?.current?.focus();
  }, [slugRef]);

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
        const slug = values.slug.replace(/\s/g, "").toLowerCase();
        await createResume({
          variables: {
            resumeData: createResumeData(values.slug),
            slug,
          },
        });
        router.push(`/resume/${slug}`);
      }}
    >
      {({ errors, isValid, submitCount, setFieldValue }) => (
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
              <Field name="slug">
                {({ field }: any) => (
                  <Typography
                    marginLeft={0.5}
                    minWidth={50}
                    ref={slugRef}
                    border={errors?.slug && "1px solid red"}
                    borderRadius={2}
                    display="inline-block"
                    contentEditable
                    variant="body1"
                    component="span"
                    color="textPrimary"
                    {...field}
                    onInput={(event: React.ChangeEvent<any>) => {
                      setFieldValue("slug", event?.currentTarget?.innerText);
                    }}
                  />
                )}
              </Field>
              {!!submitCount &&
                Object.values(errors).map((formError) => (
                  <FormHelperText error>{formError}</FormHelperText>
                ))}
            </Box>
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
