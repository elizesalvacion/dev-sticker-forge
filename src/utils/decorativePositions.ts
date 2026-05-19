import type { DecorativeElementKey } from "../types/decorative";

export interface DecorativePosition {
  x: number;
  y: number;
}

// Fixed positions around the sticker canvas (320x320)
// Corners and edges — kept away from the center text zone (~80–240)
const POSITION_MAP: Record<DecorativeElementKey, DecorativePosition> = {
  brackets: { x: 18, y: 40 },
  "jsx-tag": { x: 240, y: 40 },
  cursor: { x: 18, y: 240 },
  "terminal-prompt": { x: 240, y: 240 },
  "git-branch": { x: 18, y: 140 },
  "coffee-cup": { x: 262, y: 140 },
  "rubber-duck": { x: 18, y: 90 },
  "bug-icon": { x: 262, y: 90 },
  "keyboard-key": { x: 18, y: 190 },
  "tabs-windows": { x: 262, y: 190 },
};

export function getDecorativePosition(
  key: DecorativeElementKey,
): DecorativePosition {
  return POSITION_MAP[key];
}
