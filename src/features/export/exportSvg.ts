export function exportSvg(filename: string = "sticker.svg"): void {
  const svgEl = document.getElementById(
    "sticker-canvas",
  ) as SVGSVGElement | null;
  if (!svgEl) {
    console.error("exportSvg: #sticker-canvas not found");
    return;
  }

  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgEl);
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  triggerDownload(url, filename);
  URL.revokeObjectURL(url);
}

function triggerDownload(url: string, filename: string): void {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}
