import type { PositionType } from './stores/people';

type Props = {
  positions: PositionType[];
  className?: string;
};

export default function Position({ positions, className = '' }: Props) {
  const bgColors = new Map<PositionType, string>([
    ['主催', 'bg-red-500'],
    ['DJ', 'bg-purple-500'],
    ['MC', 'bg-orange-500'],
    ['照明', 'bg-yellow-500'],
    ['バーテンダー', 'bg-neutral-500'],
    ['SNS運用', 'bg-blue-500'],
    ['ロゴ制作', 'bg-green-500'],
    ['ページ制作', 'bg-pink-500'],
  ]);

  return (
    <div className={`w-full flex gap-2 ${className}`}>
      {positions.map((position) => (
        <p
          className={`px-4 font-medium tracking-wide leading-6 ${bgColors.get(position)}`}
          key={position}
        >
          {position}
        </p>
      ))}
    </div>
  );
}
