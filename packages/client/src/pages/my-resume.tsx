import React from "react";
import Resume from "components/Resume";
import { Banner } from "components/Banner";
import { Form, Formik } from "formik";

const defaultResume = {
  id: "b7d91036-4df9-5d06-82a5-0d46589ea95d",
  version: 1,
  tagline: "A good place for a catchy tagline",
  intro:
    "A sentence or two about you. What you love about your work. This is to get the recruiter excited",
  contactDetails: [
    ["Email", "youremail@domain.com"],
    ["Location", "San Francisco"],
    ["Web", "thelastresume.com/resume/my-slug"],
  ],
  experience: [
    {
      date: "Date Range",
      company: "Company Name",
      title: "Job Title",
      details: "What did you do here?",
    },
  ],
  education: [
    {
      company: "School or Project Name",
      title: "Degree or Project Details",
      details: "Describe major accomplishments in the degree or project",
    },
  ],
  avatar:
    "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png",
  firstName: "First Name",
  lastName: "Last Name",
};

const MyResume: React.FC = () => {
  const [myResume, setMyResume] = React.useState(defaultResume);
  const [isLoadingResume, setIsLoadingResume] = React.useState(true);
  React.useEffect(() => {
    setIsLoadingResume(false)
    // fetch("/api/resume")
    //   .then((res) => res.json())
    //   .then(setMyResume)
    //   .then(() => setIsLoadingResume(false));
  }, []);

  const saveResume = (newResume: any) => {
    fetch("/api/resume", {
      method: "POST",
      body: JSON.stringify(newResume),
    })
      .then((res) => res.json())
      .then(setMyResume);
  };

  if (isLoadingResume) return null;

  return (
    <Formik initialValues={myResume} onSubmit={saveResume}>
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <Resume
              setFieldValue={setFieldValue}
              values={values}
              isEditing
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default MyResume;
