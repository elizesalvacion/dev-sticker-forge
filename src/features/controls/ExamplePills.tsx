import React from "react";

interface ExamplePillsProps {
  examples: string[];
  onSelect: (value: string) => void;
}

const ExamplePills: React.FC<ExamplePillsProps> = ({ examples, onSelect }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-widest text-[#555570] font-mono">
        Examples
      </span>
      <div className="flex flex-wrap gap-1.5">
        {examples.map((example) => (
          <button
            key={example}
            onClick={() => onSelect(example)}
            aria-label={`Use example: ${example}`}
            className="px-2.5 py-1 text-[10px] font-mono tracking-wide rounded
              border border-[#2a2a35] text-[#444] bg-transparent
              hover:border-[#39ff14] hover:text-[#39ff14] hover:bg-[#39ff1408]
              transition-colors cursor-pointer"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamplePills;
