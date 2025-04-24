import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import { BeveledRectangleBox } from './Box';
import { RightAngledIsoscelesTriangleCorner } from './Corner';
import Position from './Position';
import Social from './Social';
import Header2 from './headers/Header2';
import { ParagraphWithLineBreak } from './headers/Paragraph';
import { recommendStillSrc } from './imgix/image';
import type { Assets } from './stores/assets';
import type { Person, PositionType, SocialLink } from './stores/people';

type Props = {
  guests: Person[];
  assets: Assets;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function SpecialGuestIntroductions({ guests, assets }: Props) {
  return (
    <motion.ul
      className="pt-8 px-6 md:px-16 w-full flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {guests.map((guest) => (
        <motion.li
          key={guest.id}
          variants={itemVariants}
          className="mt-[6rem] w-full relative"
        >
          <SpecialGuestIntroduction
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            stillPhotographyUrl={guest.still_photography!.url}
            name={guest.name}
            positions={guest.positions}
            socials={guest.social_links}
            description={guest.introduction}
            assets={assets}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}

function SpecialGuestIntroduction({
  stillPhotographyUrl,
  name,
  positions,
  socials,
  description,
  assets,
}: {
  stillPhotographyUrl: string;
  name: string;
  positions: PositionType[];
  socials: SocialLink[];
  description: string;
  assets: Assets;
}) {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const cornerSize = 24;
  const borderWidth = 5;

  return (
    <>
      <div ref={ref} className="w-full h-full relative z-10">
        <figure
          className="w-full md:w-[28rem] xl:w-[32rem] h-[36rem] md:h-[calc(100%+6rem)]
          absolute -top-[6rem] bottom-auto md:top-auto md:bottom-0 flex flex-col items-center"
        >
          <img
            src={recommendStillSrc(stillPhotographyUrl)}
            alt={name}
            className="h-full object-cover"
          />
        </figure>

        {/* 本文 */}
        <div
          className="p-6 pt-[32rem] md:p-10 md:pt-10 md:pl-[calc(28rem+2.5rem)] xl:pl-[calc(32rem+2.5rem)]
          w-full md:min-h-[32rem] xl:min-h-[40rem]"
        >
          <Header2 title={name} className="mb-1" />
          <Social socials={socials} assets={assets} />
          <Position className="mt-4" positions={positions} />
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
    </>
  );
}
