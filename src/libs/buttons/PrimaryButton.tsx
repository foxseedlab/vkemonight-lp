type Props = {
  label: string;
  href: string;
  className?: string;
}

export default function PrimaryButton({ label, href, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`
        px-20 py-2 text-2xl tracking-widest font-medium
        bg-primary-button/50 border-2 border-primary
        ${className}
      `}
    >
      {label}
    </a>
  );
}
