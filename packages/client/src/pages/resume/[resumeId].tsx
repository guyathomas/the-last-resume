import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Fab,
  Tooltip,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import {
  App_Public_Resumes,
  useUpdateResumeByIdMutation,
} from "@the-last-resume/graphql";
import Resume, { ResumeJSON_v2 } from "components/Resume";

import { HEADER_MAX_HEIGHT } from "components/Header";
import SaveFab from "components/SaveFab";
import { useAuth } from "hooks/useAuth";

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
  const { hasuraSecrets } = useAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const [saveResume, { loading: isSaving, data }] =
    useUpdateResumeByIdMutation();

  const [newResume, setNewResume] = React.useState<ResumeJSON_v2>(
    resume?.resume_data
  );
  const userId = hasuraSecrets["x-hasura-user-id"];
  const isAuthor = userId === resume?.user?.auth_id;

  React.useEffect(() => {
    if (isAuthor) setIsEditing(isAuthor)
  }, [isAuthor]);

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
      onSubmit={async (event) => {
        event.preventDefault();
        if (!resume?.id) return;
        await saveResume({
          variables: {
            resumeData: newResume,
            id: resume.id,
          },
        });
      }}
    >
      <Box position="fixed" bottom="1rem" right="1rem" zIndex={10}>
        {isAuthor && (
          <Tooltip title={isEditing ? "Preview" : "Edit"}>
            <Fab
              aria-label="edit"
              color="primary"
              type="button"
              sx={{
                marginBottom: 1,
              }}
              onClick={() => {
                setIsEditing((isCurrentlyEditing) => !isCurrentlyEditing);
              }}
            >
              {isEditing ? <VisibilityIcon /> : <EditIcon />}
            </Fab>
          </Tooltip>
        )}
        {isAuthor && (
          <SaveFab
            requestState={isSaving ? "loading" : data ? "success" : undefined}
          />
        )}
      </Box>
      <Resume
        currentValues={newResume}
        isEditing={isEditing}
        setResume={setNewResume}
      />
    </form>
  );
};

export default ResumePage;
