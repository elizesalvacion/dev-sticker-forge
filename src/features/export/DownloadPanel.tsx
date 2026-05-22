import React from "react";
import { useExport } from "./useExport";
import type { ExportState } from "./useExport";

interface DownloadPanelProps {
  stickerText: string;
}

const BUTTON_LABELS: Record<ExportState, string> = {
  idle: "",
  exporting: "Exporting...",
  done: "Done ✓",
  error: "Error — retry",
};

function ExportButton({
  format,
  state,
  onClick,
  idleLabel,
  description,
}: {
  format: string;
  state: ExportState;
  onClick: () => void;
  idleLabel: string;
  description: string;
}) {
  const isLoading = state === "exporting";
  const isDone = state === "done";
  const isError = state === "error";
  const label = state === "idle" ? idleLabel : BUTTON_LABELS[state];

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      aria-label={`Download sticker as ${format}`}
      className={`
        flex-1 flex flex-col items-center gap-1 px-4 py-3 rounded-md border
        font-mono text-xs transition-all
        ${isDone ? "border-[#39ff14] bg-[#0a2a0a] text-[#39ff14]" : ""}
        ${isError ? "border-red-500 bg-[#2a0a0a] text-red-400" : ""}
        ${isLoading ? "border-[#2a2a35] bg-[#0e0e12] text-[#555] cursor-not-allowed" : ""}
        ${
          state === "idle"
            ? "border-[#2a2a35] bg-[#0e0e12] text-white hover:border-[#39ff14] hover:bg-[#13131a]"
            : ""
        }
      `}
    >
      <span className="text-lg leading-none">
        {isLoading
          ? "⏳"
          : isDone
            ? "✓"
            : isError
              ? "✕"
              : format === "SVG"
                ? "⬡"
                : "⬢"}
      </span>
      <span className="font-bold tracking-widest">{label}</span>
      <span className="text-[10px] text-[#555570]">{description}</span>
    </button>
  );
}

const DownloadPanel: React.FC<DownloadPanelProps> = ({ stickerText }) => {
  const { svgState, pngState, handleExportSvg, handleExportPng } =
    useExport(stickerText);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] text-[#555570]">
        SVG is vector — scalable to any size. PNG is 640×640 raster with
        transparency.
      </p>
      <div className="flex gap-2">
        <ExportButton
          format="SVG"
          state={svgState}
          onClick={handleExportSvg}
          idleLabel="Download SVG"
          description="Vector · scalable"
        />
        <ExportButton
          format="PNG"
          state={pngState}
          onClick={handleExportPng}
          idleLabel="Download PNG"
          description="640×640 · transparent"
        />
      </div>
    </div>
  );
};

export default DownloadPanel;
