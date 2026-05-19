interface Props {
  x: number;
  y: number;
  color: string;
}

export default function CoffeeCupIcon({ x, y, color }: Props) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      aria-label="coffee cup icon"
      opacity="0.75"
    >
      {/* Cup body */}
      <rect
        x="0"
        y="6"
        width="20"
        height="18"
        rx="3"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      {/* Handle */}
      <path
        d="M20,10 Q28,10 28,16 Q28,22 20,22"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      {/* Saucer */}
      <ellipse
        cx="10"
        cy="26"
        rx="13"
        ry="3"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Steam lines */}
      <path
        d="M5,4 Q6,1 5,-2"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10,3 Q11,0 10,-3"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15,4 Q16,1 15,-2"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  );
}
