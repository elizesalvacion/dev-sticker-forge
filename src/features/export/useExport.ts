import { useState } from "react";
import { exportSvg } from "./exportSvg";
import { exportPng } from "./exportPng";

export type ExportState = "idle" | "exporting" | "done" | "error";

export function useExport(stickerText: string = "sticker") {
  const [svgState, setSvgState] = useState<ExportState>("idle");
  const [pngState, setPngState] = useState<ExportState>("idle");

  // Sanitize text for use as filename
  const slug =
    stickerText
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 30) || "sticker";

  const handleExportSvg = () => {
    setSvgState("exporting");
    try {
      exportSvg(`${slug}.svg`);
      setSvgState("done");
      setTimeout(() => setSvgState("idle"), 2000);
    } catch {
      setSvgState("error");
      setTimeout(() => setSvgState("idle"), 2000);
    }
  };

  const handleExportPng = async () => {
    setPngState("exporting");
    try {
      await exportPng(`${slug}.png`);
      setPngState("done");
      setTimeout(() => setPngState("idle"), 2000);
    } catch {
      setPngState("error");
      setTimeout(() => setPngState("idle"), 2000);
    }
  };

  return { svgState, pngState, handleExportSvg, handleExportPng };
}
