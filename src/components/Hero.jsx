import styles from './Hero.module.css';

export default function Hero({ data }) {
  return (
    <section className={styles.hero}>
      {/* Background image: full width */}
      <img src={data.imageLeft} alt="" className={styles.bg} />

      {/* Portrait: overlaid on the left, bottom-aligned */}
      <div className={styles.portraitWrap}>
        <img src={data.imageRight} alt="" className={styles.portrait} />
      </div>

      {/* Text overlay */}
      <div className={styles.overlay}>
        <div className={styles.card}>
          <h1 className={styles.name}>{data.name}</h1>
          <p className={styles.tagline}>{data.tagline}</p>
          <div className={styles.info}>
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <a href={data.instagram.url} target="_blank" rel="noopener noreferrer">
              {data.instagram.handle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
