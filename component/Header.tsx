import Link from 'next/link';

type Props = {
  name: string;
  link: string;
};

function NavItem({ name, link }: Props) {
  const nameUpper = name.toUpperCase();
  return (
    <Link href={link}>
      <h4 className="nav-item">
        {nameUpper}
      </h4>
    </Link>
  );
}

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 className="nav-title">Hanzhi Yin</h1>
      </Link>
      <hr />
      <nav className="nav">
        <NavItem name="composition" link="/composition" />
        <NavItem name="code" link="/code" />
        <NavItem name="CV" link="/cv" />
      </nav>
      <hr />
    </header>
  );
}
