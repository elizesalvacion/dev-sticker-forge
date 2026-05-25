import React from "react";
import type { StickerConfig } from "../../types/sticker";
import { DEFAULT_STICKER_CONFIG } from "../../constants/defaults";
import SvgFilters from "./layers/effects/SvgFilters";
import BackgroundLayer from "./layers/BackgroundLayer";
import DecorativeLayer from "./layers/DecorativeLayer";
import TextLayer from "./layers/TextLayer";
import EffectsLayer from "./layers/EffectsLayer";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface StickerCanvasProps {
  config?: StickerConfig;
}

const CANVAS_SIZE = 320;

const StickerCanvas: React.FC<StickerCanvasProps> = ({
  config = DEFAULT_STICKER_CONFIG,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const canvasSize = isMobile
    ? Math.min(260, window.innerWidth - 48)
    : CANVAS_SIZE;

  const { activeEffects, colors } = config;

  const textFilter = activeEffects.includes("glitch")
    ? "url(#fx-glitch)"
    : activeEffects.includes("neon")
      ? "url(#fx-neon)"
      : activeEffects.includes("outline")
        ? "url(#fx-outline)"
        : activeEffects.includes("shadow")
          ? "url(#fx-shadow)"
          : undefined;

  return (
    <svg
      id="sticker-canvas"
      width={canvasSize}
      height={canvasSize}
      viewBox={`0 0 ${CANVAS_SIZE} ${CANVAS_SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sticker preview"
    >
      <SvgFilters colors={colors} activeEffects={activeEffects} />

      <BackgroundLayer
        shape={config.shape}
        colors={colors}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
      />

      <DecorativeLayer
        elements={config.decorativeElements}
        colors={colors}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
      />

      <g filter={textFilter}>
        <TextLayer
          text={config.text}
          subText={config.subText}
          colors={colors}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          typographyTheme={config.typographyTheme}
        />
      </g>

      <EffectsLayer
        activeEffects={activeEffects}
        colors={colors}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
      />
    </svg>
  );
};

export default StickerCanvas;
