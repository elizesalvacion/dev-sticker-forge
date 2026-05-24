import React, { useState } from "react";
import type { StickerConfig } from "../../types/sticker";
import { PRESETS } from "../../constants/presets";

interface PresetsPanelProps {
  onSelect: (config: StickerConfig) => void;
}

const PresetsPanel: React.FC<PresetsPanelProps> = ({ onSelect }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleSelect = (id: string, config: StickerConfig) => {
    setActiveId(id);
    onSelect(config);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-widest text-[#555570] font-mono">
        Quick Presets
      </span>
      <div className="flex flex-col gap-1.5">
        {PRESETS.map((preset) => {
          const isActive = activeId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelect(preset.id, preset.config)}
              aria-label={`Apply ${preset.label} preset`}
              aria-pressed={isActive}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md border
                text-left transition-all duration-150 cursor-pointer
                ${
                  isActive
                    ? "border-[#39ff14] bg-[#39ff1412] text-white"
                    : "border-[#2a2a35] text-[#666] hover:border-[#39ff14] hover:text-white hover:bg-[#39ff1408]"
                }`}
            >
              <span className="text-base leading-none">{preset.emoji}</span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-mono tracking-wide text-inherit leading-none">
                  {preset.label}
                </span>
                <span className="text-[9px] font-mono text-[#444] leading-none tracking-wider">
                  {preset.config.typographyTheme} · {preset.config.shape}
                </span>
              </div>
              {isActive && (
                <span className="ml-auto text-[9px] text-[#39ff14] font-mono tracking-widest">
                  ✓ active
                </span>
              )}
            </button>
          );
        })}
      </div>
      {activeId && (
        <p className="text-[9px] text-[#333] font-mono tracking-wide mt-1">
          // editing will override preset
        </p>
      )}
    </div>
  );
};

export default PresetsPanel;
