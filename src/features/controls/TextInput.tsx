import React from "react";

const MAX_LENGTH = 40;

const PLACEHOLDER_EXAMPLES = [
  "Deploy & Pray",
  "Frontend Mage",
  "Git Push Panic",
];

// Characters that can break SVG rendering
const UNSAFE_SVG_CHARS = /[<>&"]/g;

const sanitizeText = (value: string): string => {
  return value.replace(UNSAFE_SVG_CHARS, "").trimStart();
};

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const remaining = MAX_LENGTH - value.length;
  const isNearLimit = remaining <= 10;
  const isAtLimit = remaining === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeText(e.target.value);
    if (sanitized.length <= MAX_LENGTH) {
      onChange(sanitized);
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[10px] uppercase tracking-widest text-[#555570] font-mono">
          {label}
        </label>
        <span
          className={`text-[10px] font-mono tabular-nums transition-colors ${
            isAtLimit
              ? "text-red-400"
              : isNearLimit
                ? "text-yellow-400"
                : "text-[#333]"
          }`}
        >
          {remaining}/{MAX_LENGTH}
        </span>
      </div>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={MAX_LENGTH}
        aria-label={label}
        className="w-full bg-[#0e0e12] border border-[#2a2a35] rounded-md px-3 py-2
          text-sm font-mono text-white placeholder-[#333]
          focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14]/20
          transition-colors"
      />
    </div>
  );
};

export { PLACEHOLDER_EXAMPLES };
export default TextInput;
