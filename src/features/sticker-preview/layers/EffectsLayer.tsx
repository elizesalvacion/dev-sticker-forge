import React from "react";
import type { EffectKey } from "../../../types/effects";
import type { StickerColors } from "../../../types/sticker";

interface EffectsLayerProps {
  activeEffects: EffectKey[];
  colors: StickerColors;
  width: number;
  height: number;
}

const EffectsLayer: React.FC<EffectsLayerProps> = ({
  activeEffects,
  colors,
  width,
  height,
}) => {
  if (activeEffects.length === 0) return <g id="effects-layer" />;

  return (
    <g id="effects-layer">
      {/* Sticker border — thick die-cut style ring */}
      {activeEffects.includes("sticker-border") && (
        <rect
          x="2"
          y="2"
          width={width - 4}
          height={height - 4}
          rx="32"
          ry="32"
          fill="none"
          stroke={colors.border}
          strokeWidth="6"
          opacity="0.9"
        />
      )}

      {/* Gradient overlay */}
      {activeEffects.includes("gradient") && (
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="url(#fx-gradient)"
          rx="28"
        />
      )}

      {/* Scanlines overlay */}
      {activeEffects.includes("scanlines") && (
        <rect
          x="8"
          y="8"
          width={width - 16}
          height={height - 16}
          fill="url(#fx-scanlines)"
          rx="24"
          opacity="0.7"
        />
      )}

      {/* CRT overlay — lines + vignette */}
      {activeEffects.includes("crt") && (
        <>
          <rect
            x="8"
            y="8"
            width={width - 16}
            height={height - 16}
            fill="url(#fx-crt-lines)"
            rx="24"
          />
          <rect
            x="8"
            y="8"
            width={width - 16}
            height={height - 16}
            fill="url(#fx-crt-vignette)"
            rx="24"
          />
        </>
      )}

      {/* Noise overlay */}
      {activeEffects.includes("noise") && (
        <rect
          x="8"
          y="8"
          width={width - 16}
          height={height - 16}
          fill="transparent"
          filter="url(#fx-noise)"
          rx="24"
          opacity="0.4"
        />
      )}
    </g>
  );
};

export default EffectsLayer;
