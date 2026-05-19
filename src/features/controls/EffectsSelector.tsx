import React from "react";
import type { EffectKey } from "../../types/effects";
import { EFFECT_DEFINITIONS } from "../../constants/effects";

interface EffectsSelectorProps {
  value: EffectKey[];
  onChange: (effects: EffectKey[]) => void;
}

const EffectsSelector: React.FC<EffectsSelectorProps> = ({
  value,
  onChange,
}) => {
  const toggle = (key: EffectKey) => {
    const isActive = value.includes(key);
    onChange(isActive ? value.filter((k) => k !== key) : [...value, key]);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-widest text-[#555570] font-mono">
        Effects
      </span>
      <div className="grid grid-cols-3 gap-1.5">
        {EFFECT_DEFINITIONS.map((effect) => {
          const isActive = value.includes(effect.key);
          return (
            <button
              key={effect.key}
              onClick={() => toggle(effect.key)}
              aria-label={`Toggle ${effect.label} effect`}
              aria-pressed={isActive}
              title={effect.description}
              className={`py-2 px-1 rounded-md border text-center transition-colors cursor-pointer
                ${
                  isActive
                    ? "border-[#39ff14] bg-[#39ff1410] text-[#39ff14]"
                    : "border-[#2a2a35] text-[#444] hover:border-[#39ff14] hover:text-[#39ff14] hover:bg-[#39ff1408]"
                }`}
            >
              <span className="text-[9px] font-mono tracking-wide leading-none">
                {effect.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EffectsSelector;
