import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const TerminalWindow: React.FC<Props> = ({ colors, width, height }) => {
  const titleBarH = 32;
  return (
    <g>
      {/* Outer frame */}
      <rect
        x="8"
        y="8"
        width={width - 16}
        height={height - 16}
        rx="10"
        ry="10"
        fill={colors.background}
        stroke={colors.border}
        strokeWidth="2.5"
      />
      {/* Title bar */}
      <rect
        x="8"
        y="8"
        width={width - 16}
        height={titleBarH}
        rx="10"
        ry="10"
        fill={colors.border}
        opacity="0.15"
      />
      {/* Separator line */}
      <line
        x1="8"
        y1={8 + titleBarH}
        x2={width - 8}
        y2={8 + titleBarH}
        stroke={colors.border}
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Traffic lights */}
      <circle cx="26" cy={8 + titleBarH / 2} r="5" fill="#ff5f56" />
      <circle cx="42" cy={8 + titleBarH / 2} r="5" fill="#ffbd2e" />
      <circle cx="58" cy={8 + titleBarH / 2} r="5" fill="#27c93f" />
      {/* Title text */}
      <text
        x={width / 2}
        y={8 + titleBarH / 2 + 4}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill={colors.accent}
        opacity="0.7"
        letterSpacing="2"
      >
        bash
      </text>
    </g>
  );
};

export default TerminalWindow;
