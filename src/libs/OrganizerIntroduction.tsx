import Position from './Position';
import { ParagraphWithLineBreak } from './headers/Paragraph';
import type { PositionType } from './stores/people';

type Props = {
  name: string;
  positions: PositionType[];
  description: string;
  avatarUrl: string;
};

export default function OrganizerIntroduction({
  name,
  positions,
  description,
  avatarUrl,
}: Props) {
  return (
    <li className="mt-6 w-[calc(100%-1.5rem)] bg-primary/30 border-2 border-primary/20 relative">
      <div className="w-full flex flex-row relative -top-6 -left-6">
        <figure className="w-32 h-32 border-2 border-primary/20">
          <img src={avatarUrl} alt={name} className="w-full" />
        </figure>

        <div className="pt-10 px-6">
          <h2 className="mb-1 text-lg font-medium">{name}</h2>
          <Position positions={positions} />
        </div>
      </div>

      <div className="-mt-6 p-6 pb-4 w-full">
        <ParagraphWithLineBreak text={description} className="mt-4" />
      </div>
    </li>
  );
}
