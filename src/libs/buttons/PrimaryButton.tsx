import { RightAngledIsoscelesTriangleCorner } from '@/libs/Corner';
import sendGAEvent from '../analytics/google';

type Props = {
  label: string;
  href: string;
  className?: string;
  newTab?: boolean;
};

export default function PrimaryButton({
  label,
  href,
  className = '',
  newTab = false,
}: Props) {
  return (
    <a
      href={href}
      className={`
        inline-block relative px-12 py-2 text-2xl text-primary text-center tracking-widest font-medium
        bg-primary-button/50 border-2 border-primary
        transition-all duration-300 ease-in-out
        hover:bg-primary-button/70 hover:scale-105 hover:shadow-lg
        hover:border-primary/80 hover:text-primary/90 cursor-pointer
        break-keep wrap-anywhere
        ${className}
      `}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
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

export function PrimaryButtonWithEvent({
  label,
  onClick,
  className = '',
  disabled = false,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) {
  const handleClick = () => {
    onClick();
    sendGAEvent('button_click', {
      category: 'engagement',
      button_label: label,
      value: 1,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`
        inline-block relative px-12 py-2 text-2xl text-primary text-center tracking-widest font-medium
        bg-primary-button/50 border-2 border-primary
        transition-all duration-300 ease-in-out
        hover:bg-primary-button/70 hover:scale-105 hover:shadow-lg
        hover:border-primary/80 hover:text-primary/90 cursor-pointer
        break-keep wrap-anywhere
        disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
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
    </button>
  );
}
