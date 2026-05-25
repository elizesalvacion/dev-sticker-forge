import React from "react";
import type { StickerConfig } from "../types/sticker";
import StickerCanvas from "../features/sticker-preview/StickerCanvas";
import EmptyStateCanvas from "./EmptyStateCanvas";
import DownloadPanel from "../features/export/DownloadPanel";
import { useTransition } from "../hooks/useTransition";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface PreviewPanelProps {
  config: StickerConfig;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ config }) => {
  const isEmpty = !config.text.trim();
  const isVisible = useTransition(config.shape, 120);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <main className="flex-1 h-full flex flex-col items-center justify-center bg-[#0e0e12] relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Preview label */}
      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-[#333] uppercase font-mono">
        Preview
      </p>

      {/* Sticker canvas — centered, no fixed dimensions on wrapper */}
      <div
        className="relative z-10 drop-shadow-[0_0_40px_rgba(57,255,20,0.15)] transition-opacity duration-150 flex items-center justify-center"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {isEmpty ? <EmptyStateCanvas /> : <StickerCanvas config={config} />}
      </div>

      {/* Download panel — desktop only */}
      {!isEmpty && !isMobile && (
        <div className="relative z-10 mt-6 w-[320px]">
          <DownloadPanel stickerText={config.text} />
        </div>
      )}

      {/* Bottom label */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-[#2a2a35] uppercase font-mono">
        320 × 320 — svg
      </p>
    </main>
  );
};

export default PreviewPanel;
