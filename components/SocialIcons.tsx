import styles from "../styles/landing.module.css";

export default function SocialIcons() {
  return (
    <div className={styles.social}>
      {/* TikTok */}
      <a
        className={`${styles.iconLink} ${styles.reveal1}`}
        href="https://www.tiktok.com/@barbi.talk"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        className={`${styles.iconLink} ${styles.reveal2}`}
        href="https://www.instagram.com/barbi_dev_/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="16.5" cy="7.5" r="0.5" />
        </svg>
      </a>

      {/* Youtube*/}
      <a
        className={`${styles.iconLink} ${styles.reveal4}`}
        href="https://www.youtube.com/@barbi-dev"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
        </svg>

        
      </a>

    </div>
  );
}
