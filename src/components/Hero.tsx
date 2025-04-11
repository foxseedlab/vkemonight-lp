import { useWindowSize } from 'react-use';

export default function Hero() {
  const { width, height } = useWindowSize();

  return (
    <section
      className="w-full h-[calc(100svh+200px)] text-center mask-contain mask-repeat-x flex flex-col items-center relative"
      style={{
        maskImage: `url("data:image/svg+xml,${createMaskImageTag(width, height)}")`,
      }}
    >
      <div className="mt-[30svh] px-4 w-full flex flex-col items-center absolute">
        <h1 className="w-3/4 md:w-2/3 xl:w-1/2">
          <img
            src="/logo.webp"
            alt="バーチャルケモナイト ロゴ"
            className="w-full select-none pointer-events-none"
            draggable="false"
          />
        </h1>
        <div className="mt-6 md:mt-10 xl:mt-16 md:text-2xl font-bold tracking-widest">
          バーチャルからお送りする夜のDJフェス | VRChat
        </div>
      </div>

      <div className="w-full h-full bg-gray-900" />
    </section>
  );
}

function createMaskImageTag(
  width: number,
  height: number,
): string {
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
