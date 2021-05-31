import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Resume from "components/Resume";
import { useRouter } from "next/dist/client/router";
import { HEADER_MAX_HEIGHT } from "components/Header";
import { Container, Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import { keyframes } from "@material-ui/styled-engine";
import { Form, Formik } from "formik";
import { App_Public_Resumes } from "@the-last-resume/graphql";
import { useAuth0 } from "@auth0/auth0-react";

const fetchGraphqlQuery = (query: string) =>
  fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ["X-HASURA-ADMIN-SECRET"]: process.env.HASURA_ADMIN_SECRET!,
    },
    body: JSON.stringify({
      query,
    }),
  }).then((res) => res.json());

export const getStaticPaths: GetStaticPaths = async () => {
  const resumes: App_Public_Resumes[] = await fetchGraphqlQuery(`{
    app_public_resumes {
      slug
    }
  }`).then((json) => json?.data?.app_public_resumes || []);

  return {
    paths: resumes.map(({ slug }) => ({
      params: { resumeId: slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resumeId = Array.isArray(params?.resumeId)
    ? params?.resumeId[0]
    : params?.resumeId;
  const resumes: App_Public_Resumes[] = await fetchGraphqlQuery(`{
    app_public_resumes(distinct_on: slug, where: {slug: {_eq: "${resumeId}"}}) {
      id
      slug
      resume_data
      user {
        id
        auth_id
      }
    }
  }
  `).then((json) => json?.data?.app_public_resumes || []);

  return {
    props: {
      resume: resumes.length ? resumes[0] : undefined,
    },
  };
};
interface ResumePageProps {
  resume?: App_Public_Resumes;
}

const CenterContent: React.FC = ({ children }) => (
  <Container
    sx={{
      minHeight: `calc(100vh - ${HEADER_MAX_HEIGHT}px)`,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "background.paper",
    }}
  >
    {children}
  </Container>
);
const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(2);
  }
  to {
    transform: rotate(359deg) scale(2);
  }
`;
const Rotate = styled.div`
  animation: ${rotate} 2s infinite linear;
  transform-origin: center;
`;

const ResumePage: React.FC<ResumePageProps> = ({ resume }) => {
  const { isFallback } = useRouter();
  const { user } = useAuth0();
  const [isEditing, setIsEditing] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      const isAuthor =
        user["https://hasura.io/jwt/claims"]["x-hasura-user-id"] ===
        resume?.user?.auth_id;
      setIsEditing(isAuthor);
    }
  }, [user]);

  if (isFallback) {
    return (
      <CenterContent>
        <Rotate>⏳</Rotate>
      </CenterContent>
    );
  }
  if (!resume) {
    return (
      <CenterContent>
        <Typography color="textPrimary" variant="h3">
          No resume found 😢
        </Typography>
      </CenterContent>
    );
  }
  if (!isEditing) return <Resume values={resume.resume_data} />;

  return (
    // TODO: Dynamically import this so we don't always load formik
    <Formik
      initialValues={resume.resume_data}
      onSubmit={() => {
        console.log("zzz TODO:");
      }}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <Resume setFieldValue={setFieldValue} values={values} isEditing />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ResumePage;
