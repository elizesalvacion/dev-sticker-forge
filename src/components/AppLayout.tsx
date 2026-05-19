import React from "react";
import SidebarPanel from "./SidebarPanel";
import PreviewPanel from "./PreviewPanel";

const AppLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0e0e12] text-white font-mono">
      <SidebarPanel />
      <PreviewPanel />
    </div>
  );
};

export default AppLayout;
