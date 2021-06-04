import { Container } from "@material-ui/core";
import LayoutForPath, { LayoutSpec } from "@guyathomas/layout-for-path";

import Header, { HEADER_MAX_HEIGHT } from "components/Header";
import { useRouter } from "next/router";

const NoLayout: React.FC = ({ children }) => <>{children}</>;

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const HomeLayout: React.FC = ({ children }) => (
  <MainLayout>
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
  </MainLayout>
);

const layoutSpec: LayoutSpec[] = [
  {
    pattern: "/resume/:resumeId",
    layout: NoLayout,
  },
  {
    pattern: "/",
    layout: HomeLayout,
  },
  {
    pattern: "/*",
    layout: MainLayout,
  },
];

export const AppLayout: React.FC = ({
  children,
}) => {
  const router = useRouter();
  const [pathWithoutQuery] = router.asPath.split("?");
  return (
    <LayoutForPath path={pathWithoutQuery} layoutSpec={layoutSpec}>
      {children}
    </LayoutForPath>
  );
};
