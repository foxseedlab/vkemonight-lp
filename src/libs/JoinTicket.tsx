import type { Assets } from './stores/assets';

type Props = {
  assets: Assets;
};

export default function JoinTicket({ assets }: Props) {
  return (
    <figure className="w-full h-[80rem] md:h-auto flex flex-col items-center relative">
      <div className="w-[80rem] md:w-[90vw] rotate-90 md:rotate-0 absolute md:sticky bottom-[31rem] md:bottom-auto">
        <img
          src={assets.featured_images.join_ticket.url}
          alt="チケット"
          className="w-full"
        />
      </div>
    </figure>
  );
}
