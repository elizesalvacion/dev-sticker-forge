interface Props {
  x: number;
  y: number;
  color: string;
}

export default function JsxTagIcon({ x, y, color }: Props) {
  return (
    <text
      x={x}
      y={y}
      fontFamily="monospace"
      fontSize="18"
      fill={color}
      opacity="0.75"
      aria-label="JSX tag icon"
    >
      {"</>"}
    </text>
  );
}
