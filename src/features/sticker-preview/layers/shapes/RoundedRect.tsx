import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const RoundedRect: React.FC<Props> = ({ colors, width, height }) => (
  <g>
    <rect
      x="8"
      y="8"
      width={width - 16}
      height={height - 16}
      rx="28"
      ry="28"
      fill={colors.background}
      stroke={colors.border}
      strokeWidth="2.5"
    />
    <rect
      x="16"
      y="16"
      width="18"
      height="3"
      fill={colors.accent}
      opacity="0.6"
    />
    <rect
      x="16"
      y="16"
      width="3"
      height="18"
      fill={colors.accent}
      opacity="0.6"
    />
    <rect
      x={width - 34}
      y="16"
      width="18"
      height="3"
      fill={colors.accent}
      opacity="0.6"
    />
    <rect
      x={width - 19}
      y="16"
      width="3"
      height="18"
      fill={colors.accent}
      opacity="0.6"
    />
    <rect
      x="16"
      y={height - 19}
      width="18"
      height="3"
      fill={colors.accent}
      opacity="0.6"
    />
    <rect
      x="16"
      y={height - 34}
      width="3"
      height="18"
      fill={colors.accent}
      opacity="0.6"
    />
    <rect
      x={width - 34}
      y={height - 19}
      width="18"
      height="3"
      fill={colors.accent}
      opacity="0.6"
    />
    <rect
      x={width - 19}
      y={height - 34}
      width="3"
      height="18"
      fill={colors.accent}
      opacity="0.6"
    />
  </g>
);

export default RoundedRect;
