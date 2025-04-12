import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className = '' }: Props) {
  return <p className={`tracking-wide leading-10 ${className}`}>{children}</p>;
}
