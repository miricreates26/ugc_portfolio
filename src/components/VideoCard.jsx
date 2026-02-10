import { useState, useRef } from 'react';
import styles from './VideoCard.module.css';

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  function handlePlay() {
    if (!video.src) return;
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  function handlePause() {
    setPlaying(false);
  }

  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        {video.src ? (
          <>
            <video
              ref={videoRef}
              src={video.src}
              poster={video.poster || undefined}
              preload="none"
              playsInline
              onPause={handlePause}
              onEnded={handlePause}
              controls={playing}
              className={styles.video}
            />
            {!playing && (
              <button className={styles.playOverlay} onClick={handlePlay} aria-label={`Play ${video.title}`}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.85)" />
                  <polygon points="19,14 19,34 36,24" fill="var(--color-title)" />
                </svg>
              </button>
            )}
          </>
        ) : (
          <div className={styles.placeholder}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.5)" />
              <polygon points="19,14 19,34 36,24" fill="var(--color-title)" />
            </svg>
            <span>{video.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
