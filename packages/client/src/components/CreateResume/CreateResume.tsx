import React from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import { useCreateResumeMutation } from "@the-last-resume/graphql";
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

interface CreateResumeProps {
  onSave: (slug: string, resume: any) => Promise<any>;
}
const ResumeSlugField: React.FC = () => {
  const { setFieldValue, values } = useFormikContext<NewResumeValues>();
  const inputRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef]);
  return (
    <Typography
      ref={inputRef}
      contentEditable
      variant="body1"
      component="span"
      color="textPrimary"
      onInput={(event?: React.ChangeEvent<any>) => {
        setFieldValue("slug", event?.currentTarget?.innerText);
      }}
    >
      {values.slug}
    </Typography>
  );
};

export const CreateResume: React.FC<CreateResumeProps> = ({}) => {
  const router = useRouter();
  const [createResume, { loading }] = useCreateResumeMutation();
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
        await createResume({
          variables: {
            object: {
              slug: values.slug,
              resume_data: DEFAULT_RESUME,
            },
          },
        });
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
              Choose a website name
            </Typography>
            <Box mb={2} />
            <Box>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                thelastresume.com/resume/
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
