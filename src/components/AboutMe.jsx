import styles from './AboutMe.module.css';

export default function AboutMe({ data }) {
  return (
    <section id="about" className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.portraitWrap}>
          <img src={data.portrait} alt="About Miri" className={styles.portrait} />
        </div>
        <div className={styles.text}>
          <h2>{data.heading}</h2>
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
