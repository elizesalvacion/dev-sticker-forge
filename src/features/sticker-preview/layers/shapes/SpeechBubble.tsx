import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface Props {
  colors: StickerColors;
  width: number;
  height: number;
}

const SpeechBubble: React.FC<Props> = ({ colors, width, height }) => {
  const w = width - 16;
  const h = height - 52;
  const r = 24;
  const tailX = 60;
  const tailY = h + 8;
  const path = `
    M ${8 + r} 8
    H ${8 + w - r}
    Q ${8 + w} 8 ${8 + w} ${8 + r}
    V ${8 + h - r}
    Q ${8 + w} ${8 + h} ${8 + w - r} ${8 + h}
    H ${tailX + 24}
    L ${tailX + 8} ${tailY}
    L ${tailX} ${8 + h}
    H ${8 + r}
    Q 8 ${8 + h} 8 ${8 + h - r}
    V ${8 + r}
    Q 8 8 ${8 + r} 8 Z
  `;
  return (
    <path
      d={path}
      fill={colors.background}
      stroke={colors.border}
      strokeWidth="2.5"
    />
  );
};

export default SpeechBubble;
