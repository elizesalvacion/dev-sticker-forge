import React from "react";
import type { TypographyThemeKey } from "../../types/typography";
import { typographyThemes } from "../../constants/typography";

interface TypographySelectorProps {
  value: TypographyThemeKey;
  onChange: (key: TypographyThemeKey) => void;
}

const TypographySelector: React.FC<TypographySelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] uppercase tracking-widest text-[#555570] font-mono">
        Typography
      </label>
      <div className="grid grid-cols-2 gap-1.5">
        {Object.values(typographyThemes).map((theme) => (
          <button
            key={theme.key}
            onClick={() => onChange(theme.key)}
            aria-label={`Select ${theme.label} typography`}
            aria-pressed={value === theme.key}
            className={`px-2 py-2 text-[10px] font-mono tracking-wide rounded border transition-colors text-left truncate ${
              value === theme.key
                ? "border-[#39ff14] text-[#39ff14] bg-[#39ff1410]"
                : "border-[#2a2a35] text-[#555] hover:border-[#39ff14] hover:text-[#39ff14]"
            }`}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypographySelector;
