import { RightAngledIsoscelesTriangleCorner } from '@/libs/Corner';

type Props = {
  label: string;
  href: string;
  className?: string;
};

export default function PrimaryButton({ label, href, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`
        inline-block relative px-20 py-2 text-2xl text-primary tracking-widest font-medium
        bg-primary-button/50 border-2 border-primary
        transition-all duration-300 ease-in-out
        hover:bg-primary-button/70 hover:scale-105 hover:shadow-lg
        hover:border-primary/80 hover:text-primary/90 cursor-pointer
        ${className}
      `}
    >
      {label}

      <RightAngledIsoscelesTriangleCorner
        cornerSize={18}
        borderWidth={4}
        strokeColor="rgba(255, 255, 255, 0.5)"
        className="absolute top-1 right-1 transition-transform duration-300 ease-in-out group-hover:rotate-12"
      />
    </a>
  );
}
