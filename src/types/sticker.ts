import type { TypographyThemeKey } from "./typography";
import type { DecorativeElementKey } from "./decorative";
import type { ColorThemeKey } from "./colorTheme";
import type { EffectKey } from "./effects";

export type ShapeType =
  | "rounded-rect"
  | "badge"
  | "speech-bubble"
  | "holographic-blob"
  | "terminal-window"
  | "floppy-disk"
  | "code-editor-tab"
  | "browser-window"
  | "command-prompt";

export interface StickerColors {
  background: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
}

export interface StickerConfig {
  text: string;
  subText?: string;
  shape: ShapeType;
  colors: StickerColors;
  typographyTheme: TypographyThemeKey;
  decorativeElements: DecorativeElementKey[];
  colorTheme: ColorThemeKey;
  activeEffects: EffectKey[];
}
