import React from "react";
import { COLOR_THEMES } from "../../constants/colorThemes";
import type { ColorThemeKey } from "../../types/colorTheme";

interface ColorThemeSelectorProps {
  value: ColorThemeKey;
  onChange: (key: ColorThemeKey) => void;
}

const ColorThemeSelector: React.FC<ColorThemeSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {COLOR_THEMES.map((theme) => {
        const isActive = value === theme.key;
        return (
          <button
            key={theme.key}
            onClick={() => onChange(theme.key)}
            aria-pressed={isActive}
            aria-label={`Select ${theme.label} color theme`}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-md border text-left
              transition-all text-xs font-mono
              ${
                isActive
                  ? "border-[#39ff14] bg-[#1a1a24] text-white"
                  : "border-[#2a2a35] bg-[#0e0e12] text-[#888] hover:border-[#39ff14] hover:text-white"
              }
            `}
          >
            {/* Color swatch */}
            <span
              className="w-5 h-5 rounded-sm flex-shrink-0 border border-[#ffffff18]"
              style={{ background: theme.previewBg }}
            >
              <span
                className="block w-full h-full rounded-sm opacity-80"
                style={{
                  background: `linear-gradient(135deg, ${theme.previewFg} 0%, ${theme.previewFg}44 100%)`,
                }}
              />
            </span>
            <span className="truncate">{theme.label}</span>
            {isActive && (
              <span className="ml-auto text-[#39ff14] text-[10px]">✓</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ColorThemeSelector;
