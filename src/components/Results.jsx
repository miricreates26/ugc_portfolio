import styles from './Results.module.css';

export default function Results({ data }) {
  return (
    <section id="results" className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2>{data.heading}</h2>
        <div className={styles.layout}>
          {/* Left column: 2x2 grid of post insight cards */}
          <div className={styles.left}>
            {data.postInsights.map((post, i) => (
              <div key={i} className={styles.postCard}>
                <img src={post.image} alt={post.alt} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Right column: insight metric rows stacked */}
          <div className={styles.right}>
            {data.metricRows.map((row, i) => (
              <div key={i} className={styles.metricCard}>
                <img src={row.image} alt={row.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
