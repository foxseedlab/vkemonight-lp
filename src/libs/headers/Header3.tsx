type Props = {
  title: string;
  className?: string;
};

export default function Header3({ title, className = '' }: Props) {
  return (
    <h2
      className={`w-full text-xl font-bold tracking-wide leading-12 break-keep wrap-anywhere ${className}`}
    >
      {title}
    </h2>
  );
}
