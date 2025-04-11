
export type PositionType = '主催' | 'DJ' | 'サイト制作';

type Props = {
  positions: PositionType[];
  className?: string;
}

export default function Position({ positions, className = '' }: Props) {
  const bgColors = {
    '主催': 'bg-red-500',
    'DJ': 'bg-purple-500',
    'サイト制作': 'bg-neutral-500',
  }

  return (
    <div className={`w-full flex gap-3 ${className}`}>
      {positions.map((position) => (
        <p
          className={`px-6 font-medium tracking-wide leading-6 ${bgColors[position]}`}
          key={position}
        >
          {position}
        </p>
      ))}
    </div>
  )
}
