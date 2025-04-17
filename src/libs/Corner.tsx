export function RightAngledIsoscelesTriangleCorner({
  cornerSize,
  borderWidth,
  strokeColor,
}: {
  cornerSize: number;
  borderWidth: number;
  strokeColor: string;
}) {
  return (
    <svg
      className="absolute top-2 right-2"
      width={cornerSize}
      height={cornerSize}
      viewBox={`${-borderWidth / 2} ${-borderWidth / 2} ${cornerSize + borderWidth} ${cornerSize + borderWidth}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={`M ${cornerSize},0 L 0,0 L ${cornerSize},${cornerSize} Z`}
        fill="none"
        stroke={strokeColor}
        strokeWidth={borderWidth / 2}
      />
    </svg>
  );
}
