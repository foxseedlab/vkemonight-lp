import { motion } from 'framer-motion';

export function TextStaggeredFade({
  text,
  className = '',
  initialDelay = 0,
}: {
  text: string;
  className?: string;
  initialDelay?: number;
}) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: initialDelay + i * 0.02 },
    }),
  };

  const letters = text.split('');

  return (
    <motion.h2
      initial="hidden"
      animate="show"
      variants={variants}
      className={className}
    >
      {letters.map((letter, i) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={`letter-${letter}-${i}`}
          variants={variants}
          custom={i}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}
