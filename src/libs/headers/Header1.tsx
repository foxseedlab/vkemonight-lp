type Props = {
  title: string;
  titleJa: string;
  isRight?: boolean;
  className?: string;
}

export default function Header1({ title, titleJa, isRight = false, className = '' }: Props) {
  return (
    <h1 className={`pt-18 w-full mix-blend-color-dodge relative ${className}`}>
      <div className={
        isRight
          ? 'mr-16 text-[14rem] text-right font-display text-header1 tracking-tighter'
          : 'ml-16 text-[14rem] font-display text-header1 tracking-tighter'
      }>
        {title}
      </div>

      <div className={
        isRight
          ? '-mt-8 mr-16 flex flex-row-reverse items-center'
          : '-mt-8 ml-16 flex flex-row items-center'
      }>
        <div className={
          isRight
            ? 'ml-8 text-4xl font-bold text-header1 flex-shrink-0'
            : 'mr-8 text-4xl font-bold text-header1 flex-shrink-0'
        }>
          {titleJa}
        </div>

        <HorizontalWave isRight={isRight} />
      </div>

      <div className={
        isRight
          ? 'w-64 h-64 text-header1 absolute bottom-36 -left-4'
          : 'w-64 h-64 text-header1 absolute bottom-36 -right-4'
      }>
        <DotPattern />
      </div>
    </h1>
  );
}

function HorizontalWave({ isRight }: { isRight: boolean }) {
  const waveNum = 5;
  const waveStartWidth = 20;
  const waveIntervalWidth = -4;
  const waveStartMinusTop = 3;
  const waveIntervalMinusTop = 3;

  return (
    <div className="w-full h-[0.2rem] relative">
      <div className="w-full h-[0.2rem] bg-header1" />

      {Array.from({ length: waveNum }).map((_, index) => (
        <div key={index} className={
          isRight
            ? `w-${waveStartWidth + index * waveIntervalWidth} h-[0.2rem]
              bg-header1 absolute -top-${waveStartMinusTop + index * waveIntervalMinusTop} left-0`
            : `w-${waveStartWidth + index * waveIntervalWidth} h-[0.2rem]
              bg-header1 absolute -top-${waveStartMinusTop + index * waveIntervalMinusTop} right-0`
        } />
      ))}
    </div>
  );
}

function DotPattern() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 12 }).flatMap((_, y) =>
        Array.from({ length: 12 }).map((_, x) => (
          <circle
            key={`${x}-${y}`}
            cx={x + 0.5}
            cy={y + 0.5}
            r="0.15"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}
