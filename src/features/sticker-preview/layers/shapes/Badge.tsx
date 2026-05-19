import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const Badge: React.FC<Props> = ({ colors, width, height }) => {
  const cx = width / 2;
  const cy = height / 2;
  const rx = (width - 20) / 2;
  const ry = (height - 20) / 2;
  return (
    <g>
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill={colors.background}
        stroke={colors.border}
        strokeWidth="2.5"
      />
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx - 8}
        ry={ry - 8}
        fill="none"
        stroke={colors.border}
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="4 4"
      />
    </g>
  );
};

export default Badge;
