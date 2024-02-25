import { getSelfByUsername } from "@/lib/auth-service";
import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import Container from "./_components/container";

interface CreateLayoutProps {
  children: React.ReactNode;
  params: { username: string };
}

const CreateLayout = async ({ children, params }: CreateLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>
            {children}
        </Container>
      </div>
    </>
  );
};

export default CreateLayout;
