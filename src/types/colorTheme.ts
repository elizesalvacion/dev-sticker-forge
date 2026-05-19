export type ColorThemeKey =
  | "hacker"
  | "vaporwave"
  | "retro-terminal"
  | "synthwave"
  | "minimalist"
  | "arcade-purple";

export interface ColorThemeDef {
  key: ColorThemeKey;
  label: string;
  background: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  previewBg: string; // swatch background shown in selector
  previewFg: string; // swatch foreground shown in selector
}
