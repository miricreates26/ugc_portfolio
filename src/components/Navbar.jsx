import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick(e, href) {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <a
          href="#"
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {data.brand}
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
          {data.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={data.cta.href}
              className="cta-button"
              onClick={(e) => handleLinkClick(e, data.cta.href)}
            >
              {data.cta.label}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
