import Image from "next/image";
import styles from "../styles/hero-artwork.module.css";

export default function HeroArtwork({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.artwork}>
      <div className={styles.glow} aria-hidden="true" />
      <Image src={src} alt={alt} width={1024} height={1024}
        className={styles.image} sizes="(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 560px" priority />
    </div>
  );
}
