import { DECORATIVE_ELEMENTS } from "../../constants/decoratives";
import type { DecorativeElementKey } from "../../types/decorative";

interface Props {
  selected: DecorativeElementKey[];
  onChange: (selected: DecorativeElementKey[]) => void;
}

export default function DecorativeSelector({ selected, onChange }: Props) {
  function toggle(key: DecorativeElementKey) {
    if (selected.includes(key)) {
      onChange(selected.filter((k) => k !== key));
    } else {
      onChange([...selected, key]);
    }
  }

  return (
    <div>
      <p className="text-xs text-gray-500 mb-2">
        Click to toggle. Max 4 recommended.
      </p>
      <div className="grid grid-cols-3 gap-2">
        {DECORATIVE_ELEMENTS.map((el) => {
          const isActive = selected.includes(el.key);
          return (
            <button
              key={el.key}
              onClick={() => toggle(el.key)}
              aria-pressed={isActive}
              aria-label={`Toggle ${el.label} decorative element`}
              className={`
                px-2 py-2 rounded text-xs font-mono border transition-all
                ${
                  isActive
                    ? "bg-[#39ff14] text-black border-[#39ff14] font-bold"
                    : "bg-[#1a1a24] text-gray-300 border-[#2a2a3a] hover:border-[#39ff14] hover:text-[#39ff14]"
                }
              `}
            >
              {el.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
