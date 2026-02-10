import styles from './Introduction.module.css';
import VideoCard from './VideoCard.jsx';

export default function Introduction({ data }) {
  return (
    <section id="videos" className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2>{data.heading}</h2>
        <div className={styles.text}>
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className={styles.videoRow}>
          {data.videos.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
