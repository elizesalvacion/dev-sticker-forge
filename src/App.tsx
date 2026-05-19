import React, { useState } from "react";
import type { StickerConfig } from "./types/sticker";
import { DEFAULT_STICKER_CONFIG } from "./constants/defaults";
import AppLayout from "./components/AppLayout";

const App: React.FC = () => {
  const [config, setConfig] = useState<StickerConfig>(DEFAULT_STICKER_CONFIG);

  const updateConfig = (partial: Partial<StickerConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }));
  };

  return <AppLayout config={config} onConfigChange={updateConfig} />;
};

export default App;
