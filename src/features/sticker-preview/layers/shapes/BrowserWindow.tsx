import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const BrowserWindow: React.FC<Props> = ({ colors, width, height }) => {
  const barH = 36;
  const urlBarY = 8 + barH + 8;
  const urlBarH = 22;
  return (
    <g>
      {/* Outer frame */}
      <rect
        x="8"
        y="8"
        width={width - 16}
        height={height - 16}
        rx="10"
        fill={colors.background}
        stroke={colors.border}
        strokeWidth="2.5"
      />
      {/* Top bar */}
      <rect
        x="8"
        y="8"
        width={width - 16}
        height={barH}
        rx="10"
        fill={colors.border}
        opacity="0.12"
      />
      <rect
        x="8"
        y={8 + barH / 2}
        width={width - 16}
        height={barH / 2}
        fill={colors.border}
        opacity="0.12"
      />
      {/* Separator */}
      <line
        x1="8"
        y1={8 + barH}
        x2={width - 8}
        y2={8 + barH}
        stroke={colors.border}
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Traffic lights */}
      <circle cx="24" cy={8 + barH / 2} r="5" fill="#ff5f56" />
      <circle cx="38" cy={8 + barH / 2} r="5" fill="#ffbd2e" />
      <circle cx="52" cy={8 + barH / 2} r="5" fill="#27c93f" />
      {/* URL bar */}
      <rect
        x="20"
        y={urlBarY}
        width={width - 40}
        height={urlBarH}
        rx="11"
        fill={colors.border}
        opacity="0.08"
        stroke={colors.border}
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <text
        x={width / 2}
        y={urlBarY + urlBarH / 2 + 4}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill={colors.accent}
        opacity="0.5"
        letterSpacing="1"
      >
        localhost:5173
      </text>
    </g>
  );
};

export default BrowserWindow;
