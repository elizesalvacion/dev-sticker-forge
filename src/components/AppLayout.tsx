import React, { useState } from "react";
import type { StickerConfig } from "../types/sticker";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SidebarPanel from "./SidebarPanel";
import PreviewPanel from "./PreviewPanel";
import MobileDrawer from "./MobileDrawer";
import MobileToolbar from "./MobileToolbar";
import { exportSvg } from "../features/export/exportSvg";
import { exportPng } from "../features/export/exportPng";

interface AppLayoutProps {
  config: StickerConfig;
  onConfigChange: (partial: Partial<StickerConfig>) => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ config, onConfigChange }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isEmpty = !config.text.trim();

  if (isMobile) {
    return (
      <div className="flex flex-col h-screen w-screen bg-[#0e0e12] text-white font-mono overflow-hidden">
        {/* Mobile preview — full screen minus toolbar */}
        <div className="flex-1 overflow-hidden pb-[64px]">
          <PreviewPanel config={config} />
        </div>

        {/* Mobile controls drawer */}
        <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <SidebarPanel
            config={config}
            onConfigChange={(partial) => {
              onConfigChange(partial);
            }}
          />
        </MobileDrawer>

        {/* Fixed bottom toolbar */}
        <MobileToolbar
          onOpenControls={() => setDrawerOpen(true)}
          onDownloadSvg={() => exportSvg(config.text)}
          onDownloadPng={() => exportPng(config.text)}
          isEmpty={isEmpty}
        />
      </div>
    );
  }

  // Desktop layout — unchanged
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0e0e12] text-white font-mono">
      <SidebarPanel config={config} onConfigChange={onConfigChange} />
      <PreviewPanel config={config} />
    </div>
  );
};

export default AppLayout;
