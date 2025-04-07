import { useWindowSize } from 'react-use';

export default function Hero() {
  const { width, height } = useWindowSize();

  return (
    <section
      className="mask-contain mask-repeat-x"
      style={{
        maskImage: `url("data:image/svg+xml,${createMaskImageTag(width, height)}")`,
      }}
    >
      <div className="h-[calc(100svh+200px)] w-screen">
        <div className="w-full h-full bg-gray-900" />
      </div>
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
