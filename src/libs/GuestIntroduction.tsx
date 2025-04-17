import { useMeasure } from 'react-use';
import Position from './Position';
import Header2 from './headers/Header2';
import { ParagraphWithLineBreak } from './headers/Paragraph';
import type { PositionType } from './stores/people';

type Props = {
  stillPhotographyUrl: string;
  name: string;
  positions: PositionType[];
  description: string;
};

export default function GuestIntroduction({
  stillPhotographyUrl,
  name,
  positions,
  description,
}: Props) {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const cornerSize = 24;
  const borderWidth = 4;

  return (
    <li className="mt-[6rem] w-full relative">
      <div ref={ref} className="w-full h-full relative z-10">
        <figure
          className="w-full md:w-[20rem] h-[36rem] md:h-[calc(100%+6rem)]
          absolute -top-[6rem] bottom-auto md:top-auto md:bottom-0"
        >
          <img src={stillPhotographyUrl} alt={name} className="h-full" />
        </figure>

        {/* 本文 */}
        <div
          className="mt-[32rem] md:mt-0 md:ml-[20rem] xl:ml-[20rem]
          w-full md:w-[calc(100%-20rem)] xl:w-[calc(100%-20rem)] p-6 md:p-10"
        >
          <Header2 title={name} className="mb-2" />
          <Position positions={positions} />
          <ParagraphWithLineBreak text={description} className="mt-4" />
        </div>
      </div>

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
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth={borderWidth / 2}
        />
      </svg>
    </li>
  );
}
