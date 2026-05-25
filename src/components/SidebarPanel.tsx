import React from "react";
import type { StickerConfig } from "../types/sticker";
import type { DecorativeElementKey } from "../types/decorative";
import { APP_NAME } from "../constants";
import PresetsPanel from "../features/controls/PresetsPanel";
import TextInput, {
  PLACEHOLDER_EXAMPLES,
} from "../features/controls/TextInput";
import ExamplePills from "../features/controls/ExamplePills";
import TypographySelector from "../features/controls/TypographySelector";
import ShapeSelector from "../features/controls/ShapeSelector";
import DecorativeSelector from "../features/controls/DecorativeSelector";
import ColorThemeSelector from "../features/controls/ColorThemeSelector";
import EffectsSelector from "../features/controls/EffectsSelector";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface SidebarPanelProps {
  config: StickerConfig;
  onConfigChange: (partial: Partial<StickerConfig>) => void;
}

const Divider = () => <div className="border-t border-[#2a2a35]" />;

const SidebarPanel: React.FC<SidebarPanelProps> = ({
  config,
  onConfigChange,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <aside
      className={`
      ${isMobile ? "w-full" : "w-80 min-w-[280px]"}
      h-full flex flex-col border-r border-[#2a2a35] bg-[#13131a] overflow-y-auto
    `}
    >
      {/* Header — hidden on mobile since drawer has its own header */}
      {!isMobile && (
        <div className="px-6 py-5 border-b border-[#2a2a35]">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-400 text-lg">⬡</span>
            <h1 className="text-sm font-bold tracking-widest uppercase text-white">
              {APP_NAME}
            </h1>
          </div>
          <p className="text-xs text-[#555570] tracking-wide">
            // craft your dev identity
          </p>
        </div>
      )}

      {/* Controls */}
      <div
        className={`
        flex-1 px-6 flex flex-col gap-6 overflow-y-auto
        ${isMobile ? "py-4 pb-8" : "py-6"}
      `}
      >
        {/* Presets */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Presets
          </div>
          <PresetsPanel onSelect={(preset) => onConfigChange(preset)} />
        </div>

        <Divider />

        {/* Text */}
        <div className="flex flex-col gap-4">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Text
          </div>
          <TextInput
            label="Primary Text"
            value={config.text}
            onChange={(val) => onConfigChange({ text: val })}
            placeholder="Deploy & Pray"
          />
          <TextInput
            label="Sub Text"
            value={config.subText ?? ""}
            onChange={(val) => onConfigChange({ subText: val })}
            placeholder="optional"
          />
          <ExamplePills
            examples={PLACEHOLDER_EXAMPLES}
            onSelect={(val) => onConfigChange({ text: val })}
          />
        </div>

        <Divider />

        {/* Typography */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Typography
          </div>
          <TypographySelector
            value={config.typographyTheme}
            onChange={(val) => onConfigChange({ typographyTheme: val })}
          />
        </div>

        <Divider />

        {/* Shape */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Shape
          </div>
          <ShapeSelector
            value={config.shape}
            onChange={(val) => onConfigChange({ shape: val })}
          />
        </div>

        <Divider />

        {/* Decorative Elements */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Decorative Elements
          </div>
          <DecorativeSelector
            selected={config.decorativeElements}
            onChange={(elements: DecorativeElementKey[]) =>
              onConfigChange({ decorativeElements: elements })
            }
          />
        </div>

        <Divider />

        {/* Color Themes */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Color Theme
          </div>
          <ColorThemeSelector
            value={config.colorTheme}
            onChange={(val) => onConfigChange({ colorTheme: val })}
          />
        </div>

        <Divider />

        {/* Effects */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Effects
          </div>
          <EffectsSelector
            value={config.activeEffects}
            onChange={(val) => onConfigChange({ activeEffects: val })}
          />
        </div>
      </div>

      {/* Footer — desktop only */}
      {!isMobile && (
        <div className="px-6 py-4 border-t border-[#2a2a35] text-[10px] text-[#333] tracking-widest">
          PHASE 10 — UX POLISH
        </div>
      )}
    </aside>
  );
};

export default SidebarPanel;
