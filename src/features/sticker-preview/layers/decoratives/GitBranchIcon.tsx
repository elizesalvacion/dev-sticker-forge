interface Props {
  x: number;
  y: number;
  color: string;
}

export default function GitBranchIcon({ x, y, color }: Props) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      aria-label="git branch icon"
      opacity="0.75"
    >
      {/* Trunk line */}
      <line
        x1="5"
        y1="0"
        x2="5"
        y2="28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Branch line */}
      <path
        d="M5,8 Q18,8 18,20"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Commit dots */}
      <circle cx="5" cy="4" r="4" fill={color} />
      <circle cx="5" cy="26" r="4" fill={color} />
      <circle cx="18" cy="22" r="4" fill={color} />
    </g>
  );
}
