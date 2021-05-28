import LayoutForPath, { LayoutSpec } from '@guyathomas/layout-for-path'

import { AuthGuard } from 'components/AuthGuard'
import { useRouter } from "next/router";

const NoLayout: React.FC = ({ children }) => <>{children}</>
const Header: React.FC = () => <>Header</>
const Footer: React.FC = () => <>Footer</>

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

const ProtectedMainLayout: React.FC = ({ children }) => (
  <AuthGuard>
    <MainLayout>
      {children}
    </MainLayout>
  </AuthGuard>
)


const layoutSpec: LayoutSpec[] = [
  {
    pattern: "/resume/edit",
    layout: ProtectedMainLayout,
  },
  {
    pattern: "/resume/:resumeId",
    layout: NoLayout,
  },
  {
    pattern: "/*",
    layout: MainLayout,
  },
];
export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutForPath path={router.asPath} layoutSpec={layoutSpec}>
      {children}
    </LayoutForPath>
  );
};