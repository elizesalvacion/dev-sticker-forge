interface Props {
  x: number;
  y: number;
  color: string;
}

export default function RubberDuckIcon({ x, y, color }: Props) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      aria-label="rubber duck icon"
      opacity="0.8"
    >
      {/* Body */}
      <ellipse cx="12" cy="20" rx="12" ry="9" fill={color} />
      {/* Head */}
      <circle cx="18" cy="11" r="7" fill={color} />
      {/* Eye */}
      <circle cx="21" cy="9" r="1.5" fill="#0e0e12" />
      {/* Bill */}
      <path d="M24,12 L30,13 L24,15 Z" fill="#f59e0b" />
    </g>
  );
}
