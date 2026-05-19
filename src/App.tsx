import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import { DEFAULT_STICKER_CONFIG } from "./constants/defaults";
import { COLOR_THEMES } from "./constants/colorThemes";
import type { StickerConfig } from "./types/sticker";
import type { ColorThemeKey } from "./types/colorTheme";

const App: React.FC = () => {
  const [config, setConfig] = useState<StickerConfig>(DEFAULT_STICKER_CONFIG);

  const updateConfig = (partial: Partial<StickerConfig>) => {
    // If colorTheme is changing, also update colors to match the theme
    if (partial.colorTheme) {
      const theme = COLOR_THEMES.find(
        (t) => t.key === (partial.colorTheme as ColorThemeKey),
      );
      if (theme) {
        setConfig((prev) => ({
          ...prev,
          ...partial,
          colors: {
            background: theme.background,
            border: theme.border,
            textPrimary: theme.textPrimary,
            textSecondary: theme.textSecondary,
            accent: theme.accent,
          },
        }));
        return;
      }
    }
    setConfig((prev) => ({ ...prev, ...partial }));
  };

  return <AppLayout config={config} onConfigChange={updateConfig} />;
};

export default App;
