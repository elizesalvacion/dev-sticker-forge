export type TypographyThemeKey =
  | "pixel"
  | "terminal"
  | "cyberpunk"
  | "handwritten"
  | "retro-arcade"
  | "monospace"
  | "vaporwave"
  | "minimalist"
  | "hacker"
  | "anime";

export interface TypographyTheme {
  key: TypographyThemeKey;
  label: string;
  fontFamily: string;
  fontSize: number;
  subFontSize: number;
  letterSpacing: string;
  textTransform: "uppercase" | "lowercase" | "capitalize" | "none";
  defaultTextColor: string;
  defaultSubColor: string;
  googleFont?: string;
}
