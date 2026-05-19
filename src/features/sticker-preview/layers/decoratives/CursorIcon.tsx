interface Props {
  x: number;
  y: number;
  color: string;
}

export default function CursorIcon({ x, y, color }: Props) {
  return (
    <g transform={`translate(${x}, ${y})`} aria-label="cursor icon">
      {/* Arrow cursor shape */}
      <polygon
        points="0,0 0,20 5,15 9,24 12,23 8,14 14,14"
        fill={color}
        opacity="0.75"
      />
    </g>
  );
}
