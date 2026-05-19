import React from "react";
import type { StickerColors } from "../../../../types/sticker";

interface SvgFiltersProps {
  colors: StickerColors;
  activeEffects: string[];
}

const SvgFilters: React.FC<SvgFiltersProps> = ({ colors, activeEffects }) => {
  return (
    <defs>
      {/* Neon glow filter */}
      {activeEffects.includes("neon") && (
        <filter id="fx-neon" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      )}

      {/* Drop shadow filter */}
      {activeEffects.includes("shadow") && (
        <filter id="fx-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow
            dx="4"
            dy="6"
            stdDeviation="4"
            floodColor={colors.accent}
            floodOpacity="0.5"
          />
        </filter>
      )}

      {/* Outline filter via morphology */}
      {activeEffects.includes("outline") && (
        <filter id="fx-outline" x="-10%" y="-10%" width="120%" height="120%">
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="2"
            result="expanded"
          />
          <feFlood floodColor={colors.accent} result="color" />
          <feComposite
            in="color"
            in2="expanded"
            operator="in"
            result="outline"
          />
          <feMerge>
            <feMergeNode in="outline" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      )}

      {/* Glitch filter — chromatic displacement */}
      {activeEffects.includes("glitch") && (
        <filter id="fx-glitch" x="-10%" y="-10%" width="120%" height="120%">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="red"
          />
          <feOffset in="red" dx="-4" dy="0" result="redShift" />
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
            result="cyan"
          />
          <feOffset in="cyan" dx="4" dy="0" result="cyanShift" />
          <feBlend in="redShift" in2="cyanShift" mode="screen" result="blend" />
          <feMerge>
            <feMergeNode in="blend" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      )}

      {/* Noise texture pattern */}
      {activeEffects.includes("noise") && (
        <filter id="fx-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noise"
            result="grayNoise"
          />
          <feBlend
            in="SourceGraphic"
            in2="grayNoise"
            mode="overlay"
            result="blend"
          />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
      )}

      {/* Gradient overlay definition */}
      {activeEffects.includes("gradient") && (
        <linearGradient id="fx-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.accent} stopOpacity="0.18" />
          <stop offset="50%" stopColor={colors.background} stopOpacity="0" />
          <stop offset="100%" stopColor={colors.border} stopOpacity="0.18" />
        </linearGradient>
      )}

      {/* Scanlines pattern */}
      {activeEffects.includes("scanlines") && (
        <pattern
          id="fx-scanlines"
          x="0"
          y="0"
          width="320"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="320"
            height="2"
            fill="black"
            opacity="0.12"
          />
        </pattern>
      )}

      {/* CRT pattern — curved vignette + lines */}
      {activeEffects.includes("crt") && (
        <>
          <pattern
            id="fx-crt-lines"
            x="0"
            y="0"
            width="320"
            height="3"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="320"
              height="1.5"
              fill="black"
              opacity="0.08"
            />
          </pattern>
          <radialGradient id="fx-crt-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="60%" stopColor="transparent" />
            <stop offset="100%" stopColor="black" stopOpacity="0.45" />
          </radialGradient>
        </>
      )}
    </defs>
  );
};

export default SvgFilters;
