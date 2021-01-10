import { PropsWithChildren } from 'react';

type PillProps = PropsWithChildren<{
  color?: 'primary' | 'secondary' | undefined;
}>;

export default function Pill({ color, children }: PillProps) {
  const classList = ['pill'];
  if (color === 'primary') classList.push('pill-primary');
  else if (color === 'secondary') classList.push('pill-secondary');

  return (
    <span className={classList.join(' ')}>
      {children}
    </span>
  );
}
