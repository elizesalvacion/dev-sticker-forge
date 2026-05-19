import React from "react";
import type { StickerConfig } from "../../types/sticker";
import { DEFAULT_STICKER_CONFIG } from "../../constants/defaults";
import BackgroundLayer from "./layers/BackgroundLayer";
import TextLayer from "./layers/TextLayer";
import DecorativeLayer from "./layers/DecorativeLayer";
import EffectsLayer from "./layers/EffectsLayer";

interface StickerCanvasProps {
  config?: StickerConfig;
}

const CANVAS_WIDTH = 320;
const CANVAS_HEIGHT = 320;

const StickerCanvas: React.FC<StickerCanvasProps> = ({
  config = DEFAULT_STICKER_CONFIG,
}) => {
  return (
    <svg
      id="sticker-canvas"
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sticker preview"
    >
      <BackgroundLayer
        shape={config.shape}
        colors={config.colors}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
      <DecorativeLayer
        colors={config.colors}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        elements={config.decorativeElements}
      />
      <TextLayer
        text={config.text}
        subText={config.subText}
        colors={config.colors}
        typographyTheme={config.typographyTheme}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
      <EffectsLayer width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
    </svg>
  );
};

export default StickerCanvas;
