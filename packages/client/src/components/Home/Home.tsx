import React from "react";
import { useGetExistingResumeQuery } from "@the-last-resume/graphql";
import { useAuth } from "hooks/useAuth";
import { ExistingResume } from "./ExistingResume";
import { CreateResume } from "./CreateResume";

export const Home: React.FC = () => {
  const { hasuraSecrets } = useAuth();

  const { data, loading: isLoadingExistingResume } = useGetExistingResumeQuery({
    variables: {
      userAuthId: hasuraSecrets["x-hasura-user-id"],
    },
  });

  if (isLoadingExistingResume) return null;

  if (data?.app_public_resumes.length) {
    return <ExistingResume slug={data.app_public_resumes[0].slug} />;
  }

  return <CreateResume />;
};
