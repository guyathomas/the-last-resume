import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Resume, { ResumeJSON_v2 } from "components/Resume";
import { useRouter } from "next/dist/client/router";
import { HEADER_MAX_HEIGHT } from "components/Header";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";

import {
  App_Public_Resumes,
  useUpdateResumeByIdMutation,
} from "@the-last-resume/graphql";
import { useAuth0 } from "@auth0/auth0-react";

import { Fab } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import CheckIcon from "@material-ui/icons/Check";

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
    revalidate: 1,
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
      textAlign: "center",
    }}
  >
    {children}
  </Container>
);

const ResumePage: React.FC<ResumePageProps> = ({ resume }) => {
  const { isFallback } = useRouter();
  const { user } = useAuth0();
  const [isEditing, setIsEditing] = React.useState(false);
  const [saveResume, { loading: isSaving, data }] =
    useUpdateResumeByIdMutation();
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [newResume, setNewResume] = React.useState<
  ResumeJSON_v2
  >(resume?.resume_data);

  React.useEffect(() => {
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }, [data]);
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
        <CircularProgress size="5rem" />
      </CenterContent>
    );
  }
  if (!newResume) {
    return (
      <CenterContent>
        <Typography color="textPrimary" variant="h3">
          No resume found 😢
        </Typography>
      </CenterContent>
    );
  }

  return (
    <form
      onSubmit={async () => {
        if (!resume?.id) return;
        await saveResume({
          variables: {
            resumeData: newResume,
            id: resume.id,
          },
        });
        setShowSuccess(true);
      }}
    >
      {isEditing && (
        <Box position="fixed" bottom="1rem" right="1rem" zIndex={10}>
          <Box position="relative">
            <Fab
              aria-label="save"
              color="primary"
              type="submit"
              disabled={isSaving}
              sx={{
                backgroundColor: showSuccess ? "green" : undefined,
                ":hover": {
                  backgroundColor: showSuccess ? "green" : undefined,
                },
              }}
            >
              {showSuccess ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {isSaving && (
              <CircularProgress
                size={68}
                sx={{
                  position: "absolute",
                  top: -6,
                  left: -6,
                  zIndex: 11,
                }}
              />
            )}
          </Box>
        </Box>
      )}
      <Resume
        currentValues={newResume}
        isEditing={isEditing}
        setResume={setNewResume}
      />
    </form>
  );
};

export default ResumePage;
