import Link from "next/link";
import styles from "../styles/home.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.footerBrand}>barbidev<span>.</span></Link>
      <div>
        <Link href="/cuestionarios">Cuestionarios</Link>
        <a href="https://github.com/barbi-dev" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://www.instagram.com/barbi_dev_/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        <a href="https://www.youtube.com/@barbi-dev" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
        <a href="https://www.tiktok.com/@barbi.talk" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
      </div>
    </footer>
  );
}
