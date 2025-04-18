import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import { BeveledRectangleBox, BeveledRectangleFigure } from './Box';
import { RightAngledIsoscelesTriangleCorner } from './Corner';
import Position from './Position';
import { ParagraphWithLineBreak } from './headers/Paragraph';
import type { Person, PositionType } from './stores/people';

type Props = {
  staffs: Person[];
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

export default function StaffIntroductions({ staffs }: Props) {
  return (
    <motion.ul
      className="mt-12 px-8 md:px-16 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
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
            description={staff.introduction}
            avatarUrl={staff.avatar.url}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}

function StaffIntroduction({
  name,
  positions,
  description,
  avatarUrl,
}: {
  name: string;
  positions: PositionType[];
  description: string;
  avatarUrl: string;
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
