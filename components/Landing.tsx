import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import styles from "../styles/home.module.css";

const whatsapp = (subject: string) => `https://wa.me/593987292609?text=${encodeURIComponent(`Hola Bárbara. Quiero cotizar ${subject}.\nCarrera y semestre: \nTemas que necesito trabajar: \nHorario disponible: `)}`;
const booking = whatsapp("clases online");

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} /></svg>;
}

function SubjectIcon({ kind }: { kind: "physics" | "python" | "methods" }) {
  return <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "physics" ? <><ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(-35 16 16)" /><ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(35 16 16)" /><circle cx="16" cy="16" r="2" fill="currentColor" /></> : kind === "python" ? <path d="m11 8-8 8 8 8m10-16 8 8-8 8m-3-20-4 24" /> : <><path d="M4 4v24h24M7 23l6-9 6 4 9-13" /><circle cx="13" cy="14" r="2" fill="currentColor" /><circle cx="19" cy="18" r="2" fill="currentColor" /></>}
  </svg>;
}

const services = [
  { kind: "physics" as const, number: "01", label: "ENTIENDE EL UNIVERSO", title: "Física universitaria", text: "Clásica, moderna y ondas. Del concepto al problema resuelto.", tags: "Física · Ingeniería · Afines", link: "/clases-de-fisica-online", cta: "Explorar las clases" },
  { kind: "python" as const, number: "02", label: "CONVIERTE IDEAS EN CÓDIGO", title: "Python aplicado", text: "Aprende programando. Simulaciones, análisis y proyectos científicos.", tags: "Python · Ciencia · Proyectos", link: whatsapp("asesoría en Python"), cta: "Consultar por Python" },
  { kind: "methods" as const, number: "03", label: "CONECTA TEORÍA Y PRÁCTICA", title: "Métodos y modelos", text: "Métodos matemáticos y numéricos para los retos de tu carrera.", tags: "Matemática · Cálculo · Modelos", link: whatsapp("clases de métodos matemáticos y numéricos"), cta: "Consultar por métodos" },
];

export default function Landing() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skip} href="#contenido">Ir al contenido</a>
      <Navbar currentPage="home" />
      <main id="contenido">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span className={styles.statusDot} /> EDUCACIÓN ONLINE · NIVEL UNIVERSITARIO</p>
            <h1 id="hero-title">Entiende la física.<br /><span>Piensa en Python.</span></h1>
            <p className={styles.heroText}>Clases que conectan ciencia, código y tu próxima gran idea.</p>
            <div className={styles.heroActions}><a className={styles.primary} href={booking} target="_blank" rel="noopener noreferrer">Encuentra tu clase <Arrow diagonal /></a><a className={styles.secondary} href="#services1">Explorar servicios <Arrow /></a></div>
            <div className={styles.heroMeta}><span><span className={styles.smallDot} /> En español, por Zoom</span><span>Desde Ecuador, contigo.</span></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualGlow} aria-hidden="true" />
            <div className={styles.visualFrame}><Image className={styles.heroImage} src="/images/physics-orbit.webp" alt="Escultura científica de vidrio iridiscente con órbitas luminosas en tonos violeta y cian" width={1024} height={1024} sizes="(max-width: 600px) 92vw, (max-width: 1100px) 48vw, 620px" priority /></div>
            <div className={`${styles.chip} ${styles.chipPhysics}`}><span className={styles.chipIcon}><SubjectIcon kind="physics" /></span><div><strong>Física, sin límites.</strong><span>Comprende. Conecta. Resuelve.</span></div></div>
            <div className={`${styles.chip} ${styles.chipCode}`}><span className={styles.codeMark}>&lt;/&gt;</span><div><strong>Ideas → código</strong><span>Python para crear.</span></div><span className={styles.chipDot} /></div>
            <div className={`${styles.miniChip} ${styles.chipZoom}`}><span className={styles.smallDot} /> Tu aula está donde tú estés</div>
            <span className={styles.visualCaption} aria-hidden="true">SCIENCE MEETS POSSIBILITY / 01</span>
          </div>
        </section>
        <div className={styles.disciplineStrip} aria-label="Áreas de estudio"><span>PARA MENTES CURIOSAS</span><p>Física<span aria-hidden="true">✦</span>Ingeniería<span aria-hidden="true">✦</span>Python<span aria-hidden="true">✦</span>Ciencia aplicada</p></div>
        <section className={styles.section} id="services1" aria-labelledby="services-title">
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>01 / LO QUE PODEMOS TRABAJAR</p><h2 id="services-title">Tu siguiente nivel<br /><span>empieza aquí.</span></h2></div><p>Tres caminos.<br />Una forma de ir más allá.</p></div>
          <div className={styles.serviceGrid}>{services.map(service => <article className={styles.serviceCard} key={service.kind}>
            <div className={styles.cardTop}><span className={`${styles.serviceIcon} ${styles[service.kind]}`}><SubjectIcon kind={service.kind} /></span><span className={styles.cardNumber}>{service.number}</span></div>
            <p className={styles.cardLabel}>{service.label}</p><h3>{service.title}</h3><p className={styles.cardText}>{service.text}</p><p className={styles.cardTags}>{service.tags}</p>
            <a className={styles.cardLink} href={service.link} {...(service.link.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{service.cta}<Arrow diagonal /></a>
          </article>)}</div>
        </section>
        <section className={`${styles.section} ${styles.learning}`} id="about" aria-labelledby="learning-title">
          <div><p className={styles.eyebrow}>02 / CÓMO APRENDES AQUÍ</p><h2 id="learning-title">Menos memorizar.<br /><span>Más comprender.</span></h2><Link className={styles.textLink} href="/projects">Explora la física en movimiento <Arrow diagonal /></Link></div>
          <ol className={styles.steps}><li><span>01</span><div><h3>Partimos de tu duda.</h3><p>Tu materia, tu nivel, tu objetivo.</p></div></li><li><span>02</span><div><h3>Conectamos las ideas.</h3><p>Conceptos claros. Ejercicios con sentido.</p></div></li><li><span>03</span><div><h3>Lo llevas a la práctica.</h3><p>Problemas reales. Código que funciona.</p></div></li></ol>
        </section>
        <section className={styles.contact} id="contact" aria-labelledby="contact-title"><div className={styles.contactGlow} aria-hidden="true" /><p className={styles.eyebrow}><span className={styles.statusDot} /> TU PRÓXIMO PASO</p><h2 id="contact-title">Las grandes ideas<br />empiezan con <span>una pregunta.</span></h2><p>Trae la tuya. La trabajamos juntos.</p><a className={styles.primary} href={booking} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp <Arrow diagonal /></a><span className={styles.contactNote}>Cotización personalizada · Horarios a convenir</span></section>
      </main>
      <SiteFooter />
    </div>
  );
}
