import styles from './Contact.module.css';

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,4 12,13 2,4" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.56a8.24 8.24 0 0 0 4.76 1.51V6.69h-1z" />
    </svg>
  );
}

export default function Contact({ data }) {
  return (
    <section id="contact" className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2>{data.heading}</h2>
        <p className={styles.subtext}>{data.subtext}</p>

        <div className={styles.links}>
          <a href={data.instagram.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <InstagramIcon />
            <span>{data.instagram.handle}</span>
          </a>
          <a href={`mailto:${data.email}`} className={styles.link}>
            <EmailIcon />
            <span>{data.email}</span>
          </a>
          <a href={data.tiktok.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <TikTokIcon />
            <span>{data.tiktok.handle}</span>
          </a>
        </div>

        <a href={data.cta.href} className="cta-button">
          {data.cta.label}
        </a>
      </div>
    </section>
  );
}
