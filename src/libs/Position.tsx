import type { PositionType } from './stores/people';

type Props = {
  positions: PositionType[];
  className?: string;
};

export default function Position({ positions, className = '' }: Props) {
  const bgColors = new Map<PositionType, string>([
    ['主催', 'bg-red-700'],
    ['DJ', 'bg-violet-800'],
    ['VJ', 'bg-cyan-700'],
    ['MC', 'bg-neutral-800'],
    ['照明', 'bg-neutral-800'],
    ['バーテンダー', 'bg-neutral-800'],
    ['SNS運用', 'bg-neutral-800'],
    ['ロゴ制作', 'bg-neutral-800'],
    ['フライヤー制作', 'bg-neutral-800'],
    ['ページ制作', 'bg-neutral-800'],
  ]);

  return (
    <div className={`w-full flex gap-2 ${className}`}>
      {positions.map((position) => (
        <p
          className={`px-3 font-medium whitespace-nowrap tracking-wide leading-6 ${bgColors.get(position)}`}
          key={position}
        >
          {position}
        </p>
      ))}
    </div>
  );
}
