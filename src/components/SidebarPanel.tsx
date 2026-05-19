import React from "react";
import { APP_NAME } from "../constants";

const SidebarPanel: React.FC = () => {
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

      {/* Controls placeholder */}
      <div className="flex-1 px-6 py-6 flex flex-col gap-4">
        <div className="text-xs text-[#555570] uppercase tracking-widest mb-2">
          — Controls
        </div>

        {/* Placeholder blocks for future phases */}
        {["Text", "Typography", "Shape", "Colors", "Effects"].map((label) => (
          <div
            key={label}
            className="rounded-md border border-[#2a2a35] bg-[#0e0e12] px-4 py-3 flex items-center justify-between opacity-40 cursor-not-allowed select-none"
          >
            <span className="text-xs text-[#888]">{label}</span>
            <span className="text-[10px] text-[#444] border border-[#333] rounded px-1.5 py-0.5">
              soon
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[#2a2a35] text-[10px] text-[#333] tracking-widest">
        PHASE 1 — FOUNDATION
      </div>
    </aside>
  );
};

export default SidebarPanel;
