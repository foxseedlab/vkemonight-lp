import { TextFade } from '../animations/TextFade';

type Props = {
  title: string;
  titleJa: string;
  right?: boolean;
  small?: boolean;
  className?: string;
};

export default function Header1({
  title,
  titleJa,
  right = false,
  small = false,
  className = '',
}: Props) {
  const displayFontSize = small
    ? 'text-[3.6rem] md:text-[8rem] xl:text-[10rem]'
    : 'text-8xl md:text-[12rem] xl:text-[14rem]';

  return (
    <h1 className={`pt-18 w-full mix-blend-color-dodge relative ${className}`}>
      <TextFade
        direction="up"
        className={
          right
            ? `mr-6 md:mr-12 xl:mr-16 ${displayFontSize}
              text-right font-display text-header1 tracking-tighter leading-none`
            : `ml-6 md:ml-12 xl:ml-16 ${displayFontSize}
              font-display text-header1 tracking-tighter leading-none`
        }
      >
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </TextFade>

      <div
        className={
          right
            ? 'mt-4 md:mt-8 mr-6 md:mr-12 xl:mr-16 flex flex-row-reverse items-center'
            : 'mt-4 md:mt-8 ml-6 md:ml-12 xl:ml-16 flex flex-row items-center'
        }
      >
        <TextFade direction="up">
          <div
            className={
              right
                ? 'ml-4 md:ml-8 text-xl md:text-2xl xl:text-4xl font-bold text-header1 whitespace-nowrap flex-shrink-0'
                : 'mr-4 md:mr-8 text-xl md:text-2xl xl:text-4xl font-bold text-header1 whitespace-nowrap flex-shrink-0'
            }
          >
            {titleJa}
          </div>
        </TextFade>

        <HorizontalWave right={right} />
      </div>

      <div
        className={
          right
            ? 'w-48 h-48 md:w-64 md:h-64 text-header1 absolute bottom-36 -left-4'
            : 'w-48 h-48 md:w-64 md:h-64 text-header1 absolute bottom-36 -right-4'
        }
      >
        <DotPattern />
      </div>
    </h1>
  );
}

function HorizontalWave({ right }: { right: boolean }) {
  // w-20 | w-16 | w-12 | w-8 | w-4
  // -top-3 | -top-6 | -top-9 | -top-12 | -top-15
  const waveNum = 5;
  const waveStartWidth = 20;
  const waveIntervalWidth = -4;
  const waveStartMinusTop = 3;
  const waveIntervalMinusTop = 3;

  return (
    <div className="w-full h-[0.1rem] md:h-[0.2rem] relative">
      <div className="w-full h-[0.1rem] md:h-[0.2rem] bg-header1" />

      {Array.from({ length: waveNum }).map((_, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className={
            right
              ? `w-${waveStartWidth + index * waveIntervalWidth} h-[0.1rem] md:h-[0.2rem]
              bg-header1 absolute -top-${waveStartMinusTop + index * waveIntervalMinusTop} left-0`
              : `w-${waveStartWidth + index * waveIntervalWidth} h-[0.1rem] md:h-[0.2rem]
              bg-header1 absolute -top-${waveStartMinusTop + index * waveIntervalMinusTop} right-0`
          }
        />
      ))}
    </div>
  );
}

function DotPattern() {
  return (
    <svg
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ドットパターン"
    >
      <title>ドットパターン</title>
      {Array.from({ length: 12 }).flatMap((_, y) =>
        Array.from({ length: 12 }).map((_, x) => (
          <circle
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`dot-${x}-${y}`}
            cx={x + 0.5}
            cy={y + 0.5}
            r="0.15"
            fill="currentColor"
          />
        )),
      )}
    </svg>
  );
}
