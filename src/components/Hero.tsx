import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';

import { TextStaggeredFade } from '@/libs/animations/TextStaggerdFace';
import type { Assets } from '@/libs/stores/assets';

type Props = {
  assets: Assets;
};

export default function Hero({ assets }: Props) {
  const { width, height } = useWindowSize();

  const logoVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
        delay: 1.0,
      },
    },
  };

  const dateVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
        delay: 2.5,
      },
    },
  };

  return (
    <section
      className="w-full h-[calc(100svh+200px)] text-center mask-contain mask-repeat-x flex flex-col items-center relative"
      style={{
        maskImage: `url("data:image/svg+xml,${createMaskImageTag(width, height)}")`,
      }}
      id="hero"
    >
      <div className="mt-[30svh] px-4 w-full flex flex-col items-center absolute z-10">
        <motion.h1
          className="w-3/4 md:w-2/3 xl:w-1/2"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={assets.logos.white.url}
            alt="バーチャルケモナイト ロゴ"
            className="w-full select-none pointer-events-none"
            draggable="false"
          />
        </motion.h1>

        <TextStaggeredFade
          text="バーチャルからお送りする夜のDJフェス | VRChat"
          className="mt-4 md:mt-8 text-sm md:text-2xl font-bold tracking-widest"
          initialDelay={1.5}
        />

        <motion.div
          className="mt-4 md:mt-8 md:text-2xl font-display flex flex-row gap-4 md:gap-10"
          variants={dateVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <span className="outlined-text-shadow-1dot5xs text-shadow-current">
              2025.
            </span>
            <span className="text-xl md:text-4xl outlined-text-shadow-xs md:outlined-text-shadow-md text-shadow-current">
              7.12
            </span>
            <span className="ml-2">sat</span>
          </div>

          <div>
            <span className="text-xl md:text-4xl outlined-text-shadow-xs md:outlined-text-shadow-md text-shadow-current">
              20:00
            </span>
            <span className="px-2">~</span>
            <span className="text-xl md:text-4xl outlined-text-shadow-xs md:outlined-text-shadow-md text-shadow-current">
              04:15
            </span>
          </div>
        </motion.div>
      </div>

      <figure className="w-full h-full">
        <img
          src={assets.featured_images.hero.url}
          alt="ヒーロー"
          className="w-full h-full object-cover brightness-35 contrast-100 blur-[0.1rem]"
        />
      </figure>

      <ScrollDownAnimation />
    </section>
  );
}

function createMaskImageTag(width: number, height: number): string {
  const svgBaseWidth = 1280;
  const svgWaveHeight = 200;

  const svgRectHeight = (svgBaseWidth * height) / width;

  const tag = `
<svg viewBox='0 0 ${svgBaseWidth} ${svgWaveHeight + (svgRectHeight - 1)}' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <rect width='${svgBaseWidth}' height='${svgRectHeight}' fill='currentColor'/>
  <path transform='translate(0, ${svgRectHeight - 1})' fill-rule='evenodd' clip-rule='evenodd' d='M0 206V185.615H71V103H142V123.385L213 123.385H284V185.615H356V61.6927H427H498H569V82.6146L640 82.6146V164.693L711 164.693V103H782V123.385L853 123.385V185.615L924 185.615H996V144.307H1067V61.6927H1138L1209 61.6927V103L1280 103V0H1209L1138 0H1067H996H924L853 0H782H711L640 0H569H498H427L356 0H284H213H142L71 0H0V206Z' fill='currentColor'/>
</svg>
`
    .trim()
    .replaceAll('  ', '')
    .replaceAll('\n', '');

  return tag;
}

function ScrollDownAnimation() {
  return (
    <div className="absolute bottom-72 right-18 z-30">
      <div className="scroll-down flex flex-col items-center relative pt-[5.5rem]">
        <div className="mt-3 arrow-down block w-[0.7rem]" />
        <div className="text-white text-sm font-medium tracking-[0.1em] origin-center rotate-90 whitespace-nowrap absolute -right-20 top-12">
          SCROLL DOWN
        </div>
      </div>
    </div>
  );
}
