import type { StickerConfig } from "../types/sticker";

export interface Preset {
  id: string;
  label: string;
  emoji: string;
  config: StickerConfig;
}

export const PRESETS: Preset[] = [
  {
    id: "frontend-mage",
    label: "Frontend Mage",
    emoji: "🧙",
    config: {
      text: "Frontend",
      subText: "Mage",
      shape: "holographic-blob",
      typographyTheme: "vaporwave",
      colorTheme: "vaporwave",
      decorativeElements: ["jsx-tag", "brackets"],
      activeEffects: ["neon", "gradient"],
      colors: {
        background: "#1a0533",
        border: "#05ffa1",
        textPrimary: "#ff71ce",
        textSecondary: "#b967ff",
        accent: "#05ffa1",
      },
    },
  },
  {
    id: "deploy-and-pray",
    label: "Deploy & Pray",
    emoji: "🙏",
    config: {
      text: "Deploy &",
      subText: "Pray",
      shape: "terminal-window",
      typographyTheme: "hacker",
      colorTheme: "hacker",
      decorativeElements: ["terminal-prompt", "git-branch"],
      activeEffects: ["scanlines", "shadow"],
      colors: {
        background: "#0e0e12",
        border: "#39ff14",
        textPrimary: "#39ff14",
        textSecondary: "#1a7a0a",
        accent: "#39ff14",
      },
    },
  },
  {
    id: "git-goblin",
    label: "Git Goblin",
    emoji: "👺",
    config: {
      text: "Git",
      subText: "Goblin",
      shape: "command-prompt",
      typographyTheme: "retro-arcade",
      colorTheme: "arcade-purple",
      decorativeElements: ["git-branch", "bug-icon"],
      activeEffects: ["glitch", "sticker-border"],
      colors: {
        background: "#120458",
        border: "#feeb2e",
        textPrimary: "#feeb2e",
        textSecondary: "#a855f7",
        accent: "#feeb2e",
      },
    },
  },
  {
    id: "bug-hunter",
    label: "Bug Hunter",
    emoji: "🐛",
    config: {
      text: "Bug",
      subText: "Hunter",
      shape: "browser-window",
      typographyTheme: "cyberpunk",
      colorTheme: "synthwave",
      decorativeElements: ["bug-icon", "cursor"],
      activeEffects: ["neon", "crt"],
      colors: {
        background: "#0d0221",
        border: "#f72585",
        textPrimary: "#ffe44d",
        textSecondary: "#4cc9f0",
        accent: "#f72585",
      },
    },
  },
  {
    id: "css-survivor",
    label: "CSS Survivor",
    emoji: "😅",
    config: {
      text: "CSS",
      subText: "Survivor",
      shape: "code-editor-tab",
      typographyTheme: "terminal",
      colorTheme: "retro-terminal",
      decorativeElements: ["brackets", "coffee-cup"],
      activeEffects: ["scanlines", "noise"],
      colors: {
        background: "#0d1a0d",
        border: "#33ff33",
        textPrimary: "#33ff33",
        textSecondary: "#1a661a",
        accent: "#33ff33",
      },
    },
  },
];
