import Header2 from "./headers/Header2";
import Paragraph from "./headers/Paragraph";
import Position, { type PositionType } from "./Position";

type Props = {
  imageSrc: string;
  name: string;
  positions: PositionType[];
  description: string;
}

export function GuestIntroduction({ imageSrc, name, positions, description }: Props) {
  return (
    <div className="mt-[6rem] w-full bg-primary/30 border-2 border-primary/20 relative">
      <figure className="md:w-[20rem] xl:w-[28rem] h-[calc(100%+6rem)] bg-white/50 absolute bottom-0">
      </figure>

      <div className="ml-[20rem] xl:ml-[28rem] w-[calc(100%-20rem)] xl:w-[calc(100%-28rem)] p-10">
        <Header2 title={name} className="mb-2" />
        <Position positions={positions}/>
        <Paragraph className="mt-4">
          {description}
        </Paragraph>
      </div>
    </div>
  )
}
