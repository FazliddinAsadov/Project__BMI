import React from "react";
import DashLayout from "../../modules/layout/DashLayout";

export type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <DashLayout>{children}</DashLayout>
    </div>
  );
};

export default AppLayout;
