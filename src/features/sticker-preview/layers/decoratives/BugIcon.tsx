interface Props {
  x: number;
  y: number;
  color: string;
}

export default function BugIcon({ x, y, color }: Props) {
  return (
    <g transform={`translate(${x}, ${y})`} aria-label="bug icon" opacity="0.75">
      {/* Body */}
      <ellipse cx="10" cy="16" rx="7" ry="10" fill={color} />
      {/* Head */}
      <circle cx="10" cy="5" r="5" fill={color} />
      {/* Eyes */}
      <circle cx="7.5" cy="4" r="1.5" fill="#0e0e12" />
      <circle cx="12.5" cy="4" r="1.5" fill="#0e0e12" />
      {/* Antennae */}
      <line
        x1="8"
        y1="1"
        x2="4"
        y2="-4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="1"
        x2="16"
        y2="-4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Legs */}
      <line
        x1="3"
        y1="12"
        x2="-4"
        y2="10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="16"
        x2="-4"
        y2="16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="20"
        x2="-4"
        y2="22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="12"
        x2="24"
        y2="10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="16"
        x2="24"
        y2="16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="20"
        x2="24"
        y2="22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  );
}
