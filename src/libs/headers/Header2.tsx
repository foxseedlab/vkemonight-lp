type Props = {
  title: string;
  className?: string;
};

export default function Header2({
  title,
  className = '',
}: Props) {
  return (
    <h2
      className={`w-full text-3xl font-bold tracking-wide leading-12 ${className}`}
    >
      {title}
    </h2>
  );
}
