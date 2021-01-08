import Link from 'next/link';

type Props = {
  name: string;
  link: string;
};

export default function NavItem({ name, link }: Props) {
  const nameUpper = name.toUpperCase();
  const focus = (e: any) => e.target.classList.add('nav-item-highlight');
  const blur = (e: any) => e.target.classList.remove('nav-item-highlight');
  return (
    <Link href={link}>
      <p
        className="nav-item"
        onMouseOver={focus}
        onMouseOut={blur}
        onFocus={focus}
        onBlur={blur}
      >
        {nameUpper}
      </p>
    </Link>
  );
}
