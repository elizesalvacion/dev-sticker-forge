export type EffectKey =
  | "glitch"
  | "shadow"
  | "neon"
  | "outline"
  | "sticker-border"
  | "crt"
  | "scanlines"
  | "gradient"
  | "noise";

export interface EffectDef {
  key: EffectKey;
  label: string;
  description: string;
}
