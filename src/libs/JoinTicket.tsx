import { motion } from 'framer-motion';
import sendGAEvent from './analytics/google';
import { recommendTicketSrc } from './imgix/image';
import type { Assets } from './stores/assets';

type Props = {
  assets: Assets;
};

export default function JoinTicket({ assets }: Props) {
  const handleClick = () => {
    sendGAEvent('ticket_click', {
      category: 'conversion',
      label: 'join_ticket_image_click',
      value: 1,
    });
  };

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
        <a
          href={import.meta.env.PUBLIC_VRCHAT_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          <img
            src={recommendTicketSrc(assets.featured_images.join_ticket.url)}
            alt="チケット"
            className="w-full"
          />
        </a>
      </motion.div>
    </figure>
  );
}
