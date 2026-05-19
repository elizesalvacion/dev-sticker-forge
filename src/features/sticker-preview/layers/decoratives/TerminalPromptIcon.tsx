interface Props {
  x: number;
  y: number;
  color: string;
}

export default function TerminalPromptIcon({ x, y, color }: Props) {
  return (
    <g transform={`translate(${x}, ${y})`} aria-label="terminal prompt icon">
      <text
        fontFamily="monospace"
        fontSize="13"
        fill={color}
        opacity="0.75"
        y="0"
      >
        {"~ $"}
      </text>
      <rect x="24" y="-12" width="7" height="13" fill={color} opacity="0.6" />
    </g>
  );
}
