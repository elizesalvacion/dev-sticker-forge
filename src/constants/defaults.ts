import type { StickerConfig } from "../types/sticker";
import { DEFAULT_TYPOGRAPHY_KEY } from "./typography";

export const DEFAULT_COLORS = {
  background: "#0e0e12",
  border: "#39ff14",
  textPrimary: "#39ff14",
  textSecondary: "#888899",
  accent: "#39ff14",
};

export const DEFAULT_STICKER_CONFIG: StickerConfig = {
  text: "Dev Sticker",
  subText: "Forge",
  shape: "rounded-rect",
  colors: DEFAULT_COLORS,
  typographyTheme: DEFAULT_TYPOGRAPHY_KEY,
  decorativeElements: [],
};
