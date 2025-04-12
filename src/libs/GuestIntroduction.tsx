import Position from './Position';
import Header2 from './headers/Header2';
import Paragraph from './headers/Paragraph';
import type { PositionType } from './stores/people';

type Props = {
  imageSrc: string;
  name: string;
  positions: PositionType[];
  description: string;
};

export default function GuestIntroduction({
  imageSrc,
  name,
  positions,
  description,
}: Props) {
  return (
    <li className="mt-[6rem] w-full bg-primary/30 border-2 border-primary/20 relative">
      <figure
        className="w-full md:w-[20rem] xl:w-[28rem] h-[36rem] md:h-[calc(100%+6rem)]
        bg-white/50 absolute -top-[6rem] bottom-auto md:top-auto md:bottom-0"
      />

      <div
        className="mt-[32rem] md:mt-0 md:ml-[20rem] xl:ml-[28rem]
        w-full md:w-[calc(100%-20rem)] xl:w-[calc(100%-28rem)] p-6 md:p-10"
      >
        <Header2 title={name} className="mb-2" />
        <Position positions={positions} />
        <Paragraph className="mt-4">{description}</Paragraph>
      </div>
    </li>
  );
}
