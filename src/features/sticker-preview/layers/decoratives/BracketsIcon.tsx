interface Props {
  x: number;
  y: number;
  color: string;
}

export default function BracketsIcon({ x, y, color }: Props) {
  return (
    <text
      x={x}
      y={y}
      fontFamily="monospace"
      fontSize="22"
      fill={color}
      opacity="0.75"
      aria-label="brackets icon"
    >
      {"{ }"}
    </text>
  );
}
