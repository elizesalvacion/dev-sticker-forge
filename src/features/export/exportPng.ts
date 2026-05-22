const EXPORT_SCALE = 2; // 2× = 640×640 high-res

export async function exportPng(
  filename: string = "sticker.png",
): Promise<void> {
  const svgEl = document.getElementById(
    "sticker-canvas",
  ) as SVGSVGElement | null;
  if (!svgEl) {
    console.error("exportPng: #sticker-canvas not found");
    return;
  }

  const svgWidth = svgEl.viewBox.baseVal.width || 320;
  const svgHeight = svgEl.viewBox.baseVal.height || 320;
  const exportWidth = svgWidth * EXPORT_SCALE;
  const exportHeight = svgHeight * EXPORT_SCALE;

  // Serialize SVG with all linked fonts inlined via foreignObject-safe clone
  const serializer = new XMLSerializer();
  const svgClone = svgEl.cloneNode(true) as SVGSVGElement;

  // Set explicit dimensions on the clone for canvas rendering
  svgClone.setAttribute("width", String(exportWidth));
  svgClone.setAttribute("height", String(exportHeight));

  const svgString = serializer.serializeToString(svgClone);
  const svgBlob = new Blob([svgString], {
    type: "image/svg+xml;charset=utf-8",
  });
  const svgUrl = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.width = exportWidth;
  img.height = exportHeight;

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = (e) => reject(e);
    img.src = svgUrl;
  });

  const canvas = document.createElement("canvas");
  canvas.width = exportWidth;
  canvas.height = exportHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("exportPng: could not get 2d context");
    URL.revokeObjectURL(svgUrl);
    return;
  }

  ctx.drawImage(img, 0, 0, exportWidth, exportHeight);
  URL.revokeObjectURL(svgUrl);

  const pngUrl = canvas.toDataURL("image/png");
  triggerDownload(pngUrl, filename);
}

function triggerDownload(url: string, filename: string): void {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}
