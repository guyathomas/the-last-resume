import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Resume from "components/Resume";
import { useRouter } from "next/dist/client/router";
import { HEADER_MAX_HEIGHT } from "components/Header";
import { Container, Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import { keyframes } from "@material-ui/styled-engine";
import { Form, Formik } from "formik";

const guy = {
  id: "b7d91036-4df9-5d06-82a5-0d46589ea95d",
  version: 1,
  tagline: "Full Stack Developer & Front-end Expert",
  intro:
    "I love empowering peers to be more productive, reducing development times and increasing the reliability of applications at scale. I work across the stack, and specialize in anything frontend.",
  contactDetails: [
    [
      "Email",
      '<a href="mailto:guythomas721@gmail.com">guythomas721@gmail.com</a>',
    ],
    ["Location", "San Francisco"],
    ["Web", '<a href="https://guythomas.me">guythomas.me</a>'],
  ],
  experience: [
    {
      date: "10th May, 2021 – Present",
      company: "Instacart",
      title: "Senior Software Engineer II",
      details:
        "<ul>\n<li>Providing customers with incentives to increase spending with features built with Ruby and Typescript + React</li>\n</ul>\n",
    },
    {
      date: "15th April, 2019 – 21st May, 2021",
      company: "Lyft",
      title: "Senior Software Engineer",
      details:
        "<ul>\n<li>Team lead for an Insurance Marketplace for drivers to purchase policies. From MVP to multi-carrier support across Android, iOS and Web. Built using React 16.8+ (hooks), Typescript, NextJS &#x26; Python</li>\n<li>Led an E2E testing initiative across all of Lyft allowing recording and replaying of HTTP responses with Cypress</li>\n<li>Enabled a 3x increase in productivity by leading the adoption for our entire org from a cloud based development workflow to a local workflow</li>\n</ul>\n",
    },
    {
      date: "26th June, 2017 – 31st January, 2019",
      company: "Reflektive",
      title: "Software Engineer",
      details:
        "<ul>\n<li>Team lead for our core 'Reviews' product. Drove a rebuild of the entire product from Backbone to React &#x26; Redux</li>\n<li>Cut development build times by 50% and reduced application load times over HTTP2 by implementing Webpack best practices</li>\n</ul>\n",
    },
    {
      date: "7th July, 2014 – 3rd June, 2016",
      company: "IBM",
      title: "Software Engineer",
      details: null,
    },
  ],
  education: [
    {
      company: "Covered App",
      title: "React / Typescript / GraphQL / Postgres",
      details:
        "<ul>\n<li>Database Driven Design - changing fields in the database will create new GraphQL resolvers / queries / mutations and then create Typescript powered client code.</li>\n<li>This means that a schema change will trigger a build error for the client. Pretty cool eh?</li>\n<li>The client is statically built with NextJS and distributed with serverless systems.</li>\n</ul>\n",
    },
    {
      company: "guythomas.me",
      title: "React / Typescript / Gatsby / Netlify",
      details:
        "<ul>\n<li><code>/blog</code> - a statically built blog from <code>.md</code> files</li>\n<li><code>/resume</code> - a resume that supports editing by anyone and will persist in their localStorage. Resume content ( like this sentence ) is defined in a <code>.yml</code> file.</li>\n</ul>\n",
    },
  ],
  avatar:
    "https://res.cloudinary.com/dqvlfpaev/image/upload/c_scale,w_400/v1580691840/avatar_sz1jui.jpg",
  firstName: "Guy",
  lastName: "Thomas",
};

const resumes = { guy };

const getResumes = () =>
  new Promise<typeof resumes>((resolve) => resolve(resumes));

export const getStaticPaths: GetStaticPaths = async () => {
  const resumeIds = Object.keys(await getResumes());
  return {
    paths: resumeIds.map((resumeId) => ({
      params: { resumeId },
    })),
    fallback: true,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resumes = await getResumes();
  const resumeId = Array.isArray(params?.resumeId)
    ? params?.resumeId[0]
    : params?.resumeId;
  const resume =
    resumeId && Object.hasOwnProperty.call(resumes, resumeId)
      ? // @ts-ignore
        resumes[resumeId]
      : undefined;
  return {
    props: {
      resume,
    },
  };
};
interface ResumePageProps {
  resume: any;
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
  const [isEditing, setIsEditing] = React.useState(false);

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
  if (!isEditing) return <Resume values={resume} />;
  
  return (
    // TODO: Dynamically import this so we don't always load formik
    <Formik initialValues={resume} onSubmit={() => {}}>
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
