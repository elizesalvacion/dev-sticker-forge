import type { EffectDef } from "../types/effects";

export const EFFECT_DEFINITIONS: EffectDef[] = [
  { key: "glitch", label: "Glitch", description: "Chromatic shift distortion" },
  { key: "shadow", label: "Shadow", description: "Drop shadow depth" },
  { key: "neon", label: "Neon", description: "Glow bloom around text" },
  { key: "outline", label: "Outline", description: "Stroke outline on text" },
  {
    key: "sticker-border",
    label: "Border",
    description: "Thick sticker die-cut border",
  },
  { key: "crt", label: "CRT", description: "Curved scanline overlay" },
  {
    key: "scanlines",
    label: "Scanlines",
    description: "Horizontal line texture",
  },
  {
    key: "gradient",
    label: "Gradient",
    description: "Diagonal gradient overlay",
  },
  { key: "noise", label: "Noise", description: "Grain texture overlay" },
];
