import React from "react";

const EmptyStateCanvas: React.FC = () => {
  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Empty sticker canvas"
    >
      {/* Dashed border */}
      <rect
        x="16"
        y="16"
        width="288"
        height="288"
        rx="28"
        ry="28"
        fill="none"
        stroke="#2a2a35"
        strokeWidth="2"
        strokeDasharray="8 6"
      />
      {/* Center icon */}
      <text x="160" y="148" textAnchor="middle" fontSize="32" opacity="0.2">
        ⬡
      </text>
      {/* Prompt text */}
      <text
        x="160"
        y="178"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="11"
        fill="#2a2a35"
        letterSpacing="2"
      >
        type something
      </text>
      <text
        x="160"
        y="196"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="11"
        fill="#2a2a35"
        letterSpacing="2"
      >
        to start
      </text>
      {/* Blinking cursor hint */}
      <rect x="148" y="208" width="8" height="2" fill="#2a2a35" opacity="0.5" />
    </svg>
  );
};

export default EmptyStateCanvas;
