interface Props {
  x: number;
  y: number;
  color: string;
}

export default function KeyboardKeyIcon({ x, y, color }: Props) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      aria-label="keyboard key icon"
      opacity="0.75"
    >
      {/* Key cap */}
      <rect
        x="0"
        y="0"
        width="24"
        height="22"
        rx="4"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      {/* Key bottom shadow */}
      <rect
        x="0"
        y="18"
        width="24"
        height="4"
        rx="2"
        fill={color}
        opacity="0.4"
      />
      {/* Key label */}
      <text
        x="12"
        y="14"
        fontFamily="monospace"
        fontSize="10"
        fill={color}
        textAnchor="middle"
      >
        fn
      </text>
    </g>
  );
}
