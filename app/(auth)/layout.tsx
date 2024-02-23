import React from "react";
import Logo from "./_components/Logo";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-6">
        <Logo />
      {children}
    </div>
  );
};

export default layout;
