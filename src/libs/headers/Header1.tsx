type Props = {
  title: string;
  titleJa: string;
  isRight?: boolean;
}

export default function Header1({ title, titleJa, isRight = false }: Props) {
  return (
    <h1 className="pt-2 w-full mix-blend-color-dodge relative">
      <div className="ml-16 text-[14rem] font-display text-header1 tracking-tighter">
        {title}
      </div>

      <div className="-mt-8 ml-16 flex flex-row items-center">
        <div className="mr-8 text-4xl font-bold text-header1 flex-shrink-0">
          {titleJa}
        </div>

        <div className="w-full h-[0.2rem] relative">
          <div className="w-full h-[0.2rem] bg-header1" />
          <div className="w-20 h-[0.2rem] bg-header1 absolute -top-3 right-0" />
          <div className="w-16 h-[0.2rem] bg-header1 absolute -top-6 right-0" />
          <div className="w-12 h-[0.2rem] bg-header1 absolute -top-9 right-0" />
          <div className="w-8 h-[0.2rem] bg-header1 absolute -top-12 right-0" />
          <div className="w-4 h-[0.2rem] bg-header1 absolute -top-15 right-0" />
        </div>
      </div>

      <div className="w-48 h-48 text-header1 absolute bottom-36 -right-4">
        <DotPattern />
      </div>
    </h1>
  );
}

function DotPattern() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 10 }).flatMap((_, y) =>
        Array.from({ length: 10 }).map((_, x) => (
          <circle
            key={`${x}-${y}`}
            cx={x + 0.5}
            cy={y + 0.5}
            r="0.2"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}
