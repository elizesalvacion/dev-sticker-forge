import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const HolographicBlob: React.FC<Props> = ({ colors, width, height }) => {
  const cx = width / 2;
  const cy = height / 2;
  const id = "holo-grad";
  return (
    <g>
      <defs>
        <radialGradient id={id} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={colors.accent} stopOpacity="0.25" />
          <stop offset="60%" stopColor={colors.background} stopOpacity="1" />
          <stop offset="100%" stopColor={colors.border} stopOpacity="0.4" />
        </radialGradient>
      </defs>
      <path
        d={`
          M ${cx} ${cy - 130}
          C ${cx + 90} ${cy - 140}, ${cx + 150} ${cy - 60}, ${cx + 140} ${cy + 20}
          C ${cx + 130} ${cy + 100}, ${cx + 60} ${cy + 140}, ${cx - 10} ${cy + 130}
          C ${cx - 80} ${cy + 120}, ${cx - 150} ${cy + 60}, ${cx - 140} ${cy - 20}
          C ${cx - 130} ${cy - 100}, ${cx - 70} ${cy - 120}, ${cx} ${cy - 130}
          Z
        `}
        fill={`url(#${id})`}
        stroke={colors.border}
        strokeWidth="2"
      />
      <path
        d={`
          M ${cx} ${cy - 130}
          C ${cx + 90} ${cy - 140}, ${cx + 150} ${cy - 60}, ${cx + 140} ${cy + 20}
          C ${cx + 130} ${cy + 100}, ${cx + 60} ${cy + 140}, ${cx - 10} ${cy + 130}
          C ${cx - 80} ${cy + 120}, ${cx - 150} ${cy + 60}, ${cx - 140} ${cy - 20}
          C ${cx - 130} ${cy - 100}, ${cx - 70} ${cy - 120}, ${cx} ${cy - 130}
          Z
        `}
        fill="none"
        stroke={colors.accent}
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="6 4"
      />
    </g>
  );
};

export default HolographicBlob;
