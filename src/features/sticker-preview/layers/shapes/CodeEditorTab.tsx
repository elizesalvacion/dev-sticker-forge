import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const CodeEditorTab: React.FC<Props> = ({ colors, width, height }) => {
  const tabH = 28;
  const tabW = 110;
  return (
    <g>
      {/* Tab top */}
      <path
        d={`M 8 ${8 + tabH} L 8 18 Q 8 8 18 8 L ${tabW} 8 Q ${tabW + 10} 8 ${tabW + 10} 18 L ${tabW + 10} ${8 + tabH} Z`}
        fill={colors.background}
        stroke={colors.border}
        strokeWidth="2"
      />
      {/* Body */}
      <rect
        x="8"
        y={8 + tabH}
        width={width - 16}
        height={height - tabH - 16}
        fill={colors.background}
        stroke={colors.border}
        strokeWidth="2"
      />
      {/* Top border line under tab */}
      <line
        x1={tabW + 10}
        y1={8 + tabH}
        x2={width - 8}
        y2={8 + tabH}
        stroke={colors.border}
        strokeWidth="2"
      />
      {/* Dot indicator on tab */}
      <circle
        cx={tabW - 10}
        cy={8 + tabH / 2}
        r="4"
        fill={colors.accent}
        opacity="0.8"
      />
      {/* Tab filename */}
      <text
        x="20"
        y={8 + tabH / 2 + 4}
        fontFamily="monospace"
        fontSize="9"
        fill={colors.accent}
        opacity="0.7"
        letterSpacing="1"
      >
        sticker.tsx
      </text>
      {/* Line number hints */}
      {[0, 1, 2, 3].map((i) => (
        <text
          key={i}
          x="22"
          y={8 + tabH + 28 + i * 18}
          fontFamily="monospace"
          fontSize="8"
          fill={colors.border}
          opacity="0.2"
        >
          {i + 1}
        </text>
      ))}
    </g>
  );
};

export default CodeEditorTab;
