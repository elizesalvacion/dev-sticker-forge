import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const CommandPrompt: React.FC<Props> = ({ colors, width, height }) => {
  const lines = ["C:\\Users\\dev>", "npm run build", "> compiled ✓", ""];
  return (
    <g>
      {/* Body */}
      <rect
        x="8"
        y="8"
        width={width - 16}
        height={height - 16}
        rx="6"
        fill={colors.background}
        stroke={colors.border}
        strokeWidth="2.5"
      />
      {/* Title bar */}
      <rect
        x="8"
        y="8"
        width={width - 16}
        height="28"
        rx="6"
        fill={colors.border}
        opacity="0.15"
      />
      <rect
        x="8"
        y="22"
        width={width - 16}
        height="14"
        fill={colors.border}
        opacity="0.15"
      />
      <line
        x1="8"
        y1="36"
        x2={width - 8}
        y2="36"
        stroke={colors.border}
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Window title */}
      <text
        x={width / 2}
        y="26"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill={colors.accent}
        opacity="0.6"
        letterSpacing="2"
      >
        Command Prompt
      </text>
      {/* Prompt lines */}
      {lines.map((line, i) => (
        <text
          key={i}
          x="20"
          y={52 + i * 18}
          fontFamily="monospace"
          fontSize="9"
          fill={i === 0 ? colors.accent : colors.textPrimary}
          opacity={i === 0 ? 0.7 : 0.25}
          letterSpacing="0.5"
        >
          {line}
        </text>
      ))}
      {/* Blinking cursor hint */}
      <rect
        x="20"
        y={52 + lines.length * 18 - 12}
        width="8"
        height="11"
        fill={colors.accent}
        opacity="0.6"
      />
    </g>
  );
};

export default CommandPrompt;
