interface Props {
  x: number;
  y: number;
  color: string;
}

export default function TabsWindowsIcon({ x, y, color }: Props) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      aria-label="tabs windows icon"
      opacity="0.75"
    >
      {/* Tab bar */}
      <rect
        x="0"
        y="0"
        width="32"
        height="8"
        rx="2"
        fill={color}
        opacity="0.3"
      />
      {/* Active tab */}
      <rect
        x="1"
        y="0"
        width="12"
        height="8"
        rx="2"
        fill={color}
        opacity="0.7"
      />
      {/* Window body */}
      <rect
        x="0"
        y="8"
        width="32"
        height="20"
        rx="0"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Content lines */}
      <line
        x1="4"
        y1="14"
        x2="28"
        y2="14"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.5"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="20"
        x2="20"
        y2="20"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.5"
        strokeLinecap="round"
      />
    </g>
  );
}
