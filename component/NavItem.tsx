import Link from 'next/link';

type Props = {
  name: string;
  link: string;
};

export default function NavItem({ name, link }: Props) {
  const nameUpper = name.toUpperCase();
  return (
    <Link href={link}>
      <p className="nav-item">
        {nameUpper}
      </p>
    </Link>
  );
}
