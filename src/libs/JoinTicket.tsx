import { motion } from 'framer-motion';
import { recommendTicketSrc } from './imgix/image';
import type { Assets } from './stores/assets';

type Props = {
  assets: Assets;
};

export default function JoinTicket({ assets }: Props) {
  return (
    <figure className="w-full h-[80rem] md:h-auto flex flex-col items-center relative">
      <motion.div
        className="w-[80rem] md:w-[90vw] rotate-90 md:rotate-0 absolute md:sticky bottom-[31rem] md:bottom-auto"
        whileHover={{
          rotate: 1.5,
          transition: { duration: 0.1, ease: 'easeOut' },
        }}
        whileTap={{
          rotate: 1.5,
          transition: { duration: 0.1, ease: 'easeOut' },
        }}
      >
        <img
          src={recommendTicketSrc(assets.featured_images.join_ticket.url)}
          alt="チケット"
          className="w-full"
        />
      </motion.div>
    </figure>
  );
}
