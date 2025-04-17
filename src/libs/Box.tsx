export function BeveledRectangleBox({
  width,
  height,
  cornerSize,
  borderWidth,
}: { width: number; height: number; cornerSize: number; borderWidth: number }) {
  return (
    <svg
      className="w-full h-full absolute bottom-0"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={`M ${cornerSize},0 L ${width},0 L ${width},${height - cornerSize} L ${width - cornerSize},${height} L 0,${height} L 0,${cornerSize} Z`}
        fill="rgba(255, 255, 255, 0.3)"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth={borderWidth}
      />
    </svg>
  );
}
