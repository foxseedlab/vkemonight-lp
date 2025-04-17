import { useMeasure } from 'react-use';
import { BeveledRectangleBox, BeveledRectangleFigure } from './Box';
import { RightAngledIsoscelesTriangleCorner } from './Corner';
import Position from './Position';
import { ParagraphWithLineBreak } from './headers/Paragraph';
import type { PositionType } from './stores/people';

type Props = {
  name: string;
  positions: PositionType[];
  description: string;
  avatarUrl: string;
};

export default function StaffIntroduction({
  name,
  positions,
  description,
  avatarUrl,
}: Props) {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const cornerSize = 24;
  const borderWidth = 5;

  return (
    <li className="w-full flex flex-col items-end">
      <div className="mt-6 w-[calc(100%-1.5rem)] relative">
        <div ref={ref} className="w-full h-full relative z-10">
          <div className="w-full flex flex-row relative -top-6 -left-6">
            <BeveledRectangleFigure
              imgSrc={avatarUrl}
              imgAlt={name}
              size={16}
              cornerSize={2}
              borderWidth={0.5}
              strokeColor="var(--color-secondary-background)"
              className="w-32 h-32"
            />

            {/* 本文 */}
            <div className="pt-10 px-6">
              <h2 className="mb-1 text-lg font-medium">{name}</h2>
              <Position positions={positions} />
            </div>
          </div>

          <div className="-mt-6 p-6 pb-4 w-full">
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
        />
      </div>
    </li>
  );
}
