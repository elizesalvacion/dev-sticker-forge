import React, { useState } from "react";
import type { StickerConfig } from "./types/sticker";
import { DEFAULT_STICKER_CONFIG } from "./constants/defaults";
import { COLOR_THEMES } from "./constants/colorThemes";
import AppLayout from "./components/AppLayout";

const App: React.FC = () => {
  const [config, setConfig] = useState<StickerConfig>(DEFAULT_STICKER_CONFIG);

  const updateConfig = (partial: Partial<StickerConfig>) => {
    // If a colorTheme key is being set, also update the colors object
    if (partial.colorTheme) {
      const theme = COLOR_THEMES.find((t) => t.key === partial.colorTheme);
      if (theme) {
        partial = {
          ...partial,
          colors: {
            background: theme.background,
            border: theme.border,
            textPrimary: theme.textPrimary,
            textSecondary: theme.textSecondary,
            accent: theme.accent,
          },
        };
      }
    }
    setConfig((prev) => ({ ...prev, ...partial }));
  };

  return <AppLayout config={config} onConfigChange={updateConfig} />;
};

export default App;
