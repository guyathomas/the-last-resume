import React from "react";
import { Field, Form, Formik } from "formik";

import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@material-ui/core";
import { DEFAULT_RESUME } from "./constants";
import { useRouter } from "next/router";
import * as Yup from "yup";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
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

interface CreateSlugProps {
  onSave: (slug: string, resume: any) => Promise<any>;
}

export const CreateSlug: React.FC<CreateSlugProps> = ({ onSave }) => {
  const router = useRouter();
  // TODO: Fetch resumes. If a slug exists, create a button that will send the user there
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
        await onSave(values.slug, DEFAULT_RESUME);
        router.push(`/resume/${values.slug}`);
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
              This is unique to your resume and cannot be changed
            </Typography>
            <Box mb={2} />
            <Field name="slug" as={TextField} label="URL Slug" />
            {Object.values(errors).map((formError) => (
              <FormHelperText error>{formError}</FormHelperText>
            ))}
            <Box mb={2} />
            <Button variant="outlined" type="submit">
              Get Started
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
