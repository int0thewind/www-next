/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 className="nav-title">
          Hanzhi Yin
        </h1>
      </Link>
      <hr />
      <nav className="nav">
        <Link href="/composition">
          <a className="nav-item" rel="noreferrer">
            COMPOSITION
          </a>
        </Link>
        <Link href="/code">
          <a className="nav-item" rel="noreferrer">
            CODE
          </a>
        </Link>
        <Link href="/resume.pdf">
          <a className="nav-item" target="_blank" rel="noreferrer">
            CV
          </a>
        </Link>
      </nav>
      <hr />
    </header>
  );
}
