import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const FloppyDisk: React.FC<Props> = ({ colors, width, height }) => {
  const x = 14;
  const y = 14;
  const w = width - 28;
  const h = height - 28;
  const notchW = w * 0.35;
  const notchH = 28;
  return (
    <g>
      {/* Body */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={colors.background}
        stroke={colors.border}
        strokeWidth="2.5"
      />
      {/* Top notch (label area cutout) */}
      <rect
        x={x + w - notchW - 12}
        y={y}
        width={notchW}
        height={notchH}
        fill={colors.border}
        opacity="0.2"
      />
      {/* Shutter slot */}
      <rect
        x={x + 16}
        y={y + h - 52}
        width={w - 32}
        height={36}
        rx="4"
        fill={colors.border}
        opacity="0.15"
        stroke={colors.border}
        strokeWidth="1"
      />
      {/* Shutter center bar */}
      <rect
        x={x + w / 2 - 6}
        y={y + h - 52}
        width={12}
        height={36}
        fill={colors.border}
        opacity="0.25"
      />
      {/* Label area */}
      <rect
        x={x + 12}
        y={y + 10}
        width={w - notchW - 28}
        height={notchH - 8}
        rx="3"
        fill={colors.accent}
        opacity="0.12"
        stroke={colors.accent}
        strokeWidth="1"
        strokeOpacity="0.3"
      />
    </g>
  );
};

export default FloppyDisk;
