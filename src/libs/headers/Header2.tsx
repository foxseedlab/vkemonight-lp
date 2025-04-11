type Props = {
  title: string;
  className?: string;
}

export default function Header2({ title, className = '' }: Props) {
  return (
    <h2 className={`w-full text-4xl font-bold tracking-wide ${className}`}>
      {title}
    </h2>
  );
}
