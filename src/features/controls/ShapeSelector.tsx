import React from "react";
import type { ShapeType } from "../../types/sticker";

interface ShapeOption {
  value: ShapeType;
  label: string;
  icon: string;
}

const SHAPE_OPTIONS: ShapeOption[] = [
  { value: "rounded-rect", label: "Rounded", icon: "▢" },
  { value: "badge", label: "Badge", icon: "◯" },
  { value: "speech-bubble", label: "Bubble", icon: "💬" },
  { value: "holographic-blob", label: "Blob", icon: "✦" },
  { value: "terminal-window", label: "Terminal", icon: "⬛" },
  { value: "floppy-disk", label: "Floppy", icon: "💾" },
  { value: "code-editor-tab", label: "Editor", icon: "📄" },
  { value: "browser-window", label: "Browser", icon: "🌐" },
  { value: "command-prompt", label: "CMD", icon: "⌨" },
];

interface ShapeSelectorProps {
  value: ShapeType;
  onChange: (shape: ShapeType) => void;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-widest text-[#555570] font-mono">
        Shape
      </span>
      <div className="grid grid-cols-3 gap-1.5">
        {SHAPE_OPTIONS.map((opt) => {
          const isActive = value === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              aria-label={`Select ${opt.label} shape`}
              className={`flex flex-col items-center gap-1 py-2 px-1 rounded-md border text-center
                transition-colors cursor-pointer
                ${
                  isActive
                    ? "border-[#39ff14] bg-[#39ff1410] text-[#39ff14]"
                    : "border-[#2a2a35] text-[#444] hover:border-[#39ff14] hover:text-[#39ff14] hover:bg-[#39ff1408]"
                }`}
            >
              <span className="text-base leading-none">{opt.icon}</span>
              <span className="text-[9px] font-mono tracking-wide leading-none">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShapeSelector;
