import React from "react";

const StickerCanvas: React.FC = () => {
  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sticker preview canvas"
    >
      {/* Background shape */}
      <rect
        x="10"
        y="10"
        width="300"
        height="300"
        rx="32"
        ry="32"
        fill="#1a1a2e"
        stroke="#39ff14"
        strokeWidth="2.5"
      />

      {/* Decorative corner accents */}
      <rect x="18" y="18" width="16" height="3" fill="#39ff14" opacity="0.5" />
      <rect x="18" y="18" width="3" height="16" fill="#39ff14" opacity="0.5" />
      <rect x="286" y="18" width="16" height="3" fill="#39ff14" opacity="0.5" />
      <rect x="299" y="18" width="3" height="16" fill="#39ff14" opacity="0.5" />
      <rect x="18" y="299" width="16" height="3" fill="#39ff14" opacity="0.5" />
      <rect x="18" y="286" width="3" height="16" fill="#39ff14" opacity="0.5" />
      <rect
        x="286"
        y="299"
        width="16"
        height="3"
        fill="#39ff14"
        opacity="0.5"
      />
      <rect
        x="299"
        y="286"
        width="3"
        height="16"
        fill="#39ff14"
        opacity="0.5"
      />

      {/* Placeholder label */}
      <text
        x="160"
        y="148"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="11"
        fill="#39ff14"
        opacity="0.4"
        letterSpacing="4"
      >
        STICKER
      </text>

      {/* Main placeholder text */}
      <text
        x="160"
        y="178"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="22"
        fontWeight="bold"
        fill="#ffffff"
        letterSpacing="2"
      >
        Dev Sticker
      </text>

      <text
        x="160"
        y="202"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="22"
        fontWeight="bold"
        fill="#39ff14"
        letterSpacing="2"
      >
        Forge
      </text>

      {/* Bottom tag */}
      <text
        x="160"
        y="270"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="#39ff14"
        opacity="0.3"
        letterSpacing="3"
      >
        &lt;/placeholder&gt;
      </text>
    </svg>
  );
};

export default StickerCanvas;
