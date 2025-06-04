import { recommendAvatarSrc, recommendStillSrc } from './imgix/image';

export function BeveledRectangleBox({
  width,
  height,
  cornerSize,
  borderWidth,
  fillColor,
  strokeColor,
}: {
  width: number;
  height: number;
  cornerSize: number;
  borderWidth: number;
  fillColor: string;
  strokeColor: string;
}) {
  return (
    <svg
      className="w-full h-full absolute bottom-0"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={`M ${cornerSize},0 L ${width},0 L ${width},${height - cornerSize} L ${width - cornerSize},${height} L 0,${height} L 0,${cornerSize} Z`}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={borderWidth}
      />
    </svg>
  );
}

export function BeveledRectangleFigure({
  imgSrc,
  imgAlt,
  size,
  cornerSize,
  borderWidth,
  strokeColor,
  className,
}: {
  imgSrc: string;
  imgAlt: string;
  size: number;
  cornerSize: number;
  borderWidth: number;
  strokeColor: string;
  className?: string;
}) {
  return (
    <figure className={`relative ${className}`}>
      <img
        src={recommendAvatarSrc(imgSrc)}
        alt={imgAlt}
        className="w-full mask-contain"
        style={{
          maskImage: `url("data:image/svg+xml,${createMaskImageTag(size, cornerSize)}")`,
        }}
        draggable={false}
      />

      <BeveledRectangleBorder
        size={size}
        cornerSize={cornerSize}
        borderWidth={borderWidth}
        strokeColor={strokeColor}
      />
    </figure>
  );
}

function createMaskImageTag(size: number, cornerSize: number): string {
  const tag = `
<svg viewBox='0 0 ${size} ${size}' xmlns='http://www.w3.org/2000/svg'>
  <path d='M ${cornerSize},0 L ${size},0 L ${size},${size - cornerSize} L ${size - cornerSize},${size} L 0,${size} L 0,${cornerSize} Z' />
</svg>
`
    .trim()
    .replaceAll('  ', '')
    .replaceAll('\n', '');

  return tag;
}

function BeveledRectangleBorder({
  size,
  cornerSize,
  borderWidth,
  strokeColor,
}: {
  size: number;
  cornerSize: number;
  borderWidth: number;
  strokeColor: string;
}) {
  return (
    <svg
      className="w-full h-full absolute bottom-0"
      viewBox={`${-borderWidth / 2} ${-borderWidth / 2} ${size + borderWidth} ${size + borderWidth}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={`M ${cornerSize},0 L ${size},0 L ${size},${size - cornerSize} L ${size - cornerSize},${size} L 0,${size} L 0,${cornerSize} Z`}
        fill="none"
        stroke={strokeColor}
        strokeWidth={borderWidth}
      />
    </svg>
  );
}
