import React from "react";
import type { StickerConfig } from "../types/sticker";
import SidebarPanel from "./SidebarPanel";
import PreviewPanel from "./PreviewPanel";

interface AppLayoutProps {
  config: StickerConfig;
  onConfigChange: (partial: Partial<StickerConfig>) => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ config, onConfigChange }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0e0e12] text-white font-mono">
      <SidebarPanel config={config} onConfigChange={onConfigChange} />
      <PreviewPanel config={config} />
    </div>
  );
};

export default AppLayout;
