import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className = '' }: Props) {
  return <p className={`tracking-wide leading-10 ${className}`}>{children}</p>;
}

export function ParagraphWithLineBreak({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      className={`tracking-wide leading-10 ${className}`}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: text.replace('\n', '<br>') }}
    />
  );
}
