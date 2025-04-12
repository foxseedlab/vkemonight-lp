import Position, { type PositionType } from './Position';
import Paragraph from './headers/Paragraph';

type Props = {
  imageSrc: string;
  name: string;
  positions: PositionType[];
  description: string;
};

export default function OrganizerIntroduction({
  imageSrc,
  name,
  positions,
  description,
}: Props) {
  return (
    <li className="mt-6 w-[calc(100%-1.5rem)] bg-primary/30 border-2 border-primary/20 relative">
      <div className="w-full flex flex-row relative -top-6 -left-6">
        <figure className="w-32 h-32 bg-gray-100 border-1 border-secondary/30" />
        <div className="pt-10 px-6">
          <h2 className="mb-1 text-lg font-medium">
            {name}
          </h2>
          <Position positions={positions} />
        </div>
      </div>

      <div className="-mt-6 p-6 pb-4 w-full">
        <Paragraph>{description}</Paragraph>
      </div>
    </li>
  );
}
