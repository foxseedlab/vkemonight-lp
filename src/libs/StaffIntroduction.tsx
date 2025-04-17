import { useMeasure } from 'react-use';
import { BeveledRectangleBox } from './Box';
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
            <figure className="w-32 h-32 border-2 border-primary/20">
              <img src={avatarUrl} alt={name} className="w-full" />
            </figure>

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
        />

        <RightAngledIsoscelesTriangleCorner
          cornerSize={cornerSize}
          borderWidth={borderWidth}
        />
      </div>
    </li>
  );
}
