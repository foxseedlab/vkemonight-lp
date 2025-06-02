import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function SectionBody({ className, children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`px-6 md:px-16 w-full flex flex-col items-center ${className ?? ''}`}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
