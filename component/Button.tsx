import { ButtonHTMLAttributes } from 'react';

// TODO: how to pass button html attribute?
// TODO: Style the button

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'link';
  sm: boolean;
};

export default function Button({ variant, children, sm }: ButtonProps) {
  const classList = ['button'];
  if (variant === 'primary') classList.push('button-primary');
  else if (variant === 'secondary') classList.push('button-secondary');
  else classList.push('button-link');

  return (
    <button type="button" className={classList.join(' ')}>
      {children}
    </button>
  );
}
