import { useMeasure } from 'react-use';
import { BeveledRectangleBox } from './Box';
import { RightAngledIsoscelesTriangleCorner } from './Corner';
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
  const borderWidth = 5;

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

      <BeveledRectangleBox
        width={width}
        height={height}
        cornerSize={cornerSize}
        borderWidth={borderWidth}
        fillColor="rgba(255, 255, 255, 0.3)"
        strokeColor="rgba(255, 255, 255, 0.2)"
      />

      <RightAngledIsoscelesTriangleCorner
        cornerSize={cornerSize}
        borderWidth={borderWidth}
        strokeColor="rgba(255, 255, 255, 0.5)"
        className="absolute top-2 right-2"
      />
    </li>
  );
}
