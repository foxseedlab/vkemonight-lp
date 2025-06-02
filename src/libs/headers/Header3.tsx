type Props = {
  title: string;
  className?: string;
};

export default function Header3({ title, className = '' }: Props) {
  return (
    <h3
      className={`pl-6 text-xl font-bold tracking-wide text-[hsl(270,25%,15%)] bg-white leading-12 break-keep wrap-anywhere ${className ?? ''}`}
    >
      {title}
    </h3>
  );
}
