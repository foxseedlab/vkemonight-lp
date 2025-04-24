import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import { BeveledRectangleBox, BeveledRectangleFigure } from './Box';
import { RightAngledIsoscelesTriangleCorner } from './Corner';
import Position from './Position';
import Social from './Social';
import { ParagraphWithLineBreak } from './headers/Paragraph';
import type { Assets } from './stores/assets';
import type { Person, PositionType, SocialLink } from './stores/people';

type Props = {
  staffs: Person[];
  assets: Assets;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function StaffIntroductions({ staffs, assets }: Props) {
  return (
    <motion.ul
      className="mt-12 px-6 md:px-16 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {staffs.map((staff) => (
        <motion.li
          key={staff.id}
          variants={itemVariants}
          className="w-full flex flex-col items-end"
        >
          <StaffIntroduction
            name={staff.name}
            positions={staff.positions}
            socials={staff.social_links}
            description={staff.introduction}
            avatarUrl={staff.avatar.url}
            assets={assets}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}

function StaffIntroduction({
  name,
  positions,
  socials,
  description,
  avatarUrl,
  assets,
}: {
  name: string;
  positions: PositionType[];
  socials: SocialLink[];
  description: string;
  avatarUrl: string;
  assets: Assets;
}) {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const cornerSize = 24;
  const borderWidth = 5;

  return (
    <>
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

            <div className="pt-10 pl-5 w-[calc(100%-8rem)]">
              <h2 className="mb-1 text-lg font-medium">{name}</h2>
              <Social socials={socials} assets={assets} />
              <Position className="mt-[0.6rem]" positions={positions} />
            </div>
          </div>

          {/* 本文 */}
          <div className="-mt-6 p-6 pb-4 w-full">
            <ParagraphWithLineBreak text={description} />
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
      </div>
    </>
  );
}
