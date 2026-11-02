import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import SiteLayout from "../components/SiteLayout";
import ui from "../styles/home.module.css";
import styles from "../styles/interior.module.css";

type Simulation = {
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  preview: string;
  animation: string;
  tags: string[];
  isNew?: boolean;
};

const simulations: Simulation[] = [
  {
    slug: "BrownianMotion",
    title: "Movimiento browniano 2D",
    subtitle: "Explora la traza acumulativa de una partícula fluorescente.",
    href: "/BrownianMotion/index.html",
    preview: "/visualizer/BrownianMotion.png",
    animation: "/visualizer/BrownianMotionTail.gif",
    tags: ["Ciencia con Huella", "Física", "Estocástico"],
  },
  {
    slug: "DoublePendulum",
    title: "Péndulo doble",
    subtitle: "Observa cómo divergen las trayectorias de dos péndulos.",
    href: "/DoublePendulum/index.html",
    preview: "/visualizer/double_pendulum.png",
    animation: "/visualizer/two_pendulum_.gif",
    tags: ["Caos", "Física", "Simulación"],
    isNew: true,
  },
];

function SimulationCard({ simulation, index }: { simulation: Simulation; index: number }) {
  const [previewActive, setPreviewActive] = useState(false);
  const startPreview = () => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPreviewActive(true);
  };
  return (
    <a className={styles.projectCard} href={simulation.href} target="_blank" rel="noopener noreferrer"
      aria-label={`Abrir simulación: ${simulation.title} (nueva pestaña)`}
      onMouseEnter={startPreview} onMouseLeave={() => setPreviewActive(false)}
      onFocus={startPreview} onBlur={() => setPreviewActive(false)}>
      <div className={styles.projectImage}>
        <img src={previewActive ? simulation.animation : simulation.preview} alt={simulation.title} width="1280" height="800" loading="lazy" />
        <span className={styles.imageIndex}>EXPERIMENTO / 0{index + 1}</span>
        {simulation.isNew && <span className={styles.newBadge}>NUEVO</span>}
        <span className={styles.openIcon} aria-hidden="true">↗</span>
      </div>
      <div className={styles.projectBody}>
        <div className={styles.tags}>{simulation.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <h2>{simulation.title}</h2>
        <p>{simulation.subtitle}</p>
        <span className={styles.cardAction}>Explorar simulación <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Proyectos y simulaciones de física | BarbiDev</title>
        <meta name="description" content="Explora simulaciones interactivas de física: movimiento browniano y péndulo doble. Ciencia, matemáticas y programación en movimiento con BarbiDev." />
      </Head>
      <SiteLayout currentPage="projects">
        <main id="contenido" className={styles.main}>
          <header className={styles.pageHeader}>
            <div><p className={ui.eyebrow}><span className={ui.statusDot} /> LABORATORIO DIGITAL</p><h1>La ciencia,<br /><span>en movimiento.</span></h1><p className={styles.lead}>Explora modelos. Cambia tu perspectiva. Conecta física y código.</p></div>
            <a className={ui.secondary} href="https://github.com/barbi-dev" target="_blank" rel="noopener noreferrer">Explorar GitHub <span aria-hidden="true">↗</span></a>
          </header>
          <section aria-label="Simulaciones de física" className={styles.projectGrid}>
            {simulations.map((simulation, index) => <SimulationCard key={simulation.slug} simulation={simulation} index={index} />)}
          </section>
          <section className={styles.callout} aria-labelledby="project-classes-title">
            <div><p className={ui.eyebrow}>DEL MODELO AL CONCEPTO</p><h2 id="project-classes-title">¿Quieres entender qué hay detrás?</h2><p>Trabajemos la física de tu carrera, paso a paso.</p></div>
            <Link className={ui.primary} href="/clases-de-fisica-online">Ver clases de física <span aria-hidden="true">↗</span></Link>
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
