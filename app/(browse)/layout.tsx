import { Suspense } from "react";
import Container from "./_component/container";
import Navbar from "./_component/navbar";
import Sidebar, { SidebarSkeleton } from "./_component/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
