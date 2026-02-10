import styles from './Photography.module.css';

export default function Photography({ data }) {
  return (
    <section id="photography" className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2>{data.heading}</h2>
        <div className={styles.grid}>
          {data.images.map((img, i) => (
            <div key={i} className={styles.item}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
