import React from "react";
import type { StickerConfig } from "../types/sticker";
import type { DecorativeElementKey } from "../types/decorative";
import { APP_NAME } from "../constants";
import TextInput, {
  PLACEHOLDER_EXAMPLES,
} from "../features/controls/TextInput";
import ExamplePills from "../features/controls/ExamplePills";
import TypographySelector from "../features/controls/TypographySelector";
import ShapeSelector from "../features/controls/ShapeSelector";
import DecorativeSelector from "../features/controls/DecorativeSelector";

interface SidebarPanelProps {
  config: StickerConfig;
  onConfigChange: (partial: Partial<StickerConfig>) => void;
}

const SidebarPanel: React.FC<SidebarPanelProps> = ({
  config,
  onConfigChange,
}) => {
  return (
    <aside className="w-80 min-w-[280px] h-full flex flex-col border-r border-[#2a2a35] bg-[#13131a] overflow-y-auto">
      {/* Header */}
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

      {/* Controls */}
      <div className="flex-1 px-6 py-6 flex flex-col gap-6 overflow-y-auto">
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

        {/* Divider */}
        <div className="border-t border-[#2a2a35]" />

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

        {/* Divider */}
        <div className="border-t border-[#2a2a35]" />

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

        {/* Divider */}
        <div className="border-t border-[#2a2a35]" />

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

        {/* Divider */}
        <div className="border-t border-[#2a2a35]" />

        {/* Remaining placeholders */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-[#555570] uppercase tracking-widest">
            — Coming Soon
          </div>
          {["Colors", "Effects"].map((label) => (
            <div
              key={label}
              className="rounded-md border border-[#2a2a35] bg-[#0e0e12] px-4 py-3
                flex items-center justify-between opacity-40 cursor-not-allowed select-none"
            >
              <span className="text-xs text-[#888]">{label}</span>
              <span className="text-[10px] text-[#444] border border-[#333] rounded px-1.5 py-0.5">
                soon
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[#2a2a35] text-[10px] text-[#333] tracking-widest">
        PHASE 6 — DECORATIVE ELEMENTS
      </div>
    </aside>
  );
};

export default SidebarPanel;
