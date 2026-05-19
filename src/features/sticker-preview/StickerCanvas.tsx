import React from "react";
import type { StickerConfig } from "../../types/sticker";
import { DEFAULT_STICKER_CONFIG } from "../../constants/defaults";
import SvgFilters from "./layers/effects/SvgFilters";
import BackgroundLayer from "./layers/BackgroundLayer";
import DecorativeLayer from "./layers/DecorativeLayer";
import TextLayer from "./layers/TextLayer";
import EffectsLayer from "./layers/EffectsLayer";

interface StickerCanvasProps {
  config?: StickerConfig;
}

const CANVAS_WIDTH = 320;
const CANVAS_HEIGHT = 320;

const StickerCanvas: React.FC<StickerCanvasProps> = ({
  config = DEFAULT_STICKER_CONFIG,
}) => {
  const { activeEffects, colors } = config;

  // Determine which filter to apply to the text layer
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
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sticker preview"
    >
      {/* SVG filter defs — must be first */}
      <SvgFilters colors={colors} activeEffects={activeEffects} />

      {/* Layer 1 — Background Shape */}
      <BackgroundLayer
        shape={config.shape}
        colors={colors}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />

      {/* Layer 2 — Decorative Elements */}
      <DecorativeLayer
        elements={config.decorativeElements}
        colors={colors}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />

      {/* Layer 3 — Text (with optional filter) */}
      <g filter={textFilter}>
        <TextLayer
          text={config.text}
          subText={config.subText}
          colors={colors}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          typographyTheme={config.typographyTheme}
        />
      </g>

      {/* Layer 4 — Effects overlays */}
      <EffectsLayer
        activeEffects={activeEffects}
        colors={colors}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
    </svg>
  );
};

export default StickerCanvas;
