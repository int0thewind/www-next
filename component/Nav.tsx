import Link from 'next/link';
import NavItem from './NavItem';

// TODO: things for Nav
// 1. Flex box style
// 2. general styles

export default function Nav() {
  return (
    <header className="nav-header">
      <Link href="/">
        <h1 className="nav-title">Hanzhi Yin</h1>
      </Link>
      <hr />
      <nav className="nav">
        {/* <NavItem name="bio" link="/bio" /> */}
        <NavItem name="composition" link="/composition" />
        <NavItem name="code" link="/code" />
        <NavItem name="CV" link="/cv" />
      </nav>
      <hr />
    </header>
  );
}
