import React from "react";

interface MobileToolbarProps {
  onOpenControls: () => void;
  onDownloadSvg: () => void;
  onDownloadPng: () => void;
  isEmpty: boolean;
}

const MobileToolbar: React.FC<MobileToolbarProps> = ({
  onOpenControls,
  onDownloadSvg,
  onDownloadPng,
  isEmpty,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-[#0a0a10] border-t border-[#2a2a35] px-4 py-3 flex items-center gap-3">
      {/* Controls toggle */}
      <button
        onClick={onOpenControls}
        aria-label="Open controls"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md
          border border-[#2a2a35] bg-[#13131a] text-[#888]
          hover:border-[#39ff14] hover:text-[#39ff14]
          active:scale-95 transition-all duration-150 font-mono text-xs tracking-wide"
      >
        <span>⚙</span>
        <span>Customize</span>
      </button>

      {/* Download SVG */}
      <button
        onClick={onDownloadSvg}
        disabled={isEmpty}
        aria-label="Download SVG"
        className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md
          border font-mono text-xs tracking-wide transition-all duration-150 active:scale-95
          ${
            isEmpty
              ? "border-[#1a1a22] text-[#2a2a35] cursor-not-allowed"
              : "border-[#2a2a35] text-[#888] hover:border-[#39ff14] hover:text-[#39ff14]"
          }`}
      >
        SVG
      </button>

      {/* Download PNG */}
      <button
        onClick={onDownloadPng}
        disabled={isEmpty}
        aria-label="Download PNG"
        className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md
          border font-mono text-xs tracking-wide transition-all duration-150 active:scale-95
          ${
            isEmpty
              ? "border-[#1a1a22] text-[#2a2a35] cursor-not-allowed"
              : "border-[#39ff14] bg-[#39ff1410] text-[#39ff14] hover:bg-[#39ff1420]"
          }`}
      >
        PNG
      </button>
    </div>
  );
};

export default MobileToolbar;
