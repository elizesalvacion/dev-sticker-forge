import React from "react";
import type { StickerConfig } from "../types/sticker";
import StickerCanvas from "../features/sticker-preview/StickerCanvas";
import DownloadPanel from "../features/export/DownloadPanel";

interface PreviewPanelProps {
  config: StickerConfig;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ config }) => {
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

      {/* Sticker canvas */}
      <div className="relative z-10 drop-shadow-[0_0_40px_rgba(57,255,20,0.15)]">
        <StickerCanvas config={config} />
      </div>

      {/* Download panel */}
      <div className="relative z-10 mt-6 w-[320px]">
        <DownloadPanel stickerText={config.text} />
      </div>

      {/* Bottom label */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-[#2a2a35] uppercase font-mono">
        320 × 320 — svg
      </p>
    </main>
  );
};

export default PreviewPanel;
