import React from "react";
import type { StickerColors } from "../../../types/sticker";
import type { TypographyThemeKey } from "../../../types/typography";
import { typographyThemes } from "../../../constants/typography";

interface TextLayerProps {
  text: string;
  subText?: string;
  colors: StickerColors;
  typographyTheme: TypographyThemeKey;
  width: number;
  height: number;
}

const applyTransform = (text: string, transform: string): string => {
  switch (transform) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "capitalize":
      return text.replace(/\b\w/g, (c) => c.toUpperCase());
    default:
      return text;
  }
};

const TextLayer: React.FC<TextLayerProps> = ({
  text,
  subText,
  colors,
  typographyTheme,
  width,
  height,
}) => {
  const theme = typographyThemes[typographyTheme];
  const cx = width / 2;
  const hasSubText = subText && subText.trim().length > 0;
  const mainY = hasSubText ? height / 2 - 10 : height / 2 + 8;

  const displayText = applyTransform(text, theme.textTransform);
  const displaySub = hasSubText
    ? applyTransform(subText!, theme.textTransform)
    : "";

  return (
    <g aria-label={`Sticker text: ${text}${subText ? " " + subText : ""}`}>
      {/* Decorative label */}
      <text
        x={cx}
        y={mainY - 36}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill={colors.accent}
        opacity="0.4"
        letterSpacing="4"
      >
        // sticker
      </text>

      {/* Primary text */}
      <text
        x={cx}
        y={mainY}
        textAnchor="middle"
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSize}
        fill={colors.textPrimary}
        letterSpacing={theme.letterSpacing}
        fontWeight="bold"
      >
        {displayText}
      </text>

      {/* Sub text */}
      {hasSubText && (
        <text
          x={cx}
          y={mainY + theme.subFontSize + 14}
          textAnchor="middle"
          fontFamily={theme.fontFamily}
          fontSize={theme.subFontSize}
          fill={colors.textSecondary}
          letterSpacing={theme.letterSpacing}
          fontWeight="bold"
        >
          {displaySub}
        </text>
      )}
    </g>
  );
};

export default TextLayer;
