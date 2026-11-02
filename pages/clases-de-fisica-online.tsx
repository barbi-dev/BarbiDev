import Head from "next/head";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";
import HeroArtwork from "../components/HeroArtwork";
import styles from "../styles/physics.module.css";

const pageUrl = "https://barbidev.com/clases-de-fisica-online";
const bookingUrl = `https://wa.me/593987292609?text=${encodeURIComponent(
  "Hola Bárbara. Quiero cotizar clases de física universitaria online.\nCarrera y semestre: \nMateria y temas: \nObjetivo o fecha de examen: \nHorario disponible (hora de Ecuador): "
)}`;
const subjects = ["Física clásica", "Física moderna", "Física de las ondas", "Métodos matemáticos", "Métodos numéricos", "Otras materias de física"];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Clases de física universitaria online",
  serviceType: "Clases particulares de física universitaria en español por Zoom",
  url: pageUrl,
  description: "Física clásica, moderna y de las ondas, métodos matemáticos y numéricos. Clases universitarias en español por Zoom desde Ecuador.",
  areaServed: { "@type": "Country", name: "Ecuador" },
  provider: { "@type": "Person", name: "Bárbara Villacis", url: "https://barbidev.com/" },
  audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Estudiantes universitarios de Física, Ingeniería y carreras afines" },
  availableChannel: { "@type": "ServiceChannel", serviceUrl: bookingUrl, availableLanguage: "es" },
};

export default function PhysicsClasses() {
  return (
    <>
      <Head>
        <title>Clases de física universitaria online | BarbiDev Ecuador</title>
        <meta name="description" content="Clases de física universitaria online en español por Zoom. Física clásica, moderna, ondas y métodos matemáticos y numéricos. Ecuador. Cotiza por WhatsApp." />
        <meta property="og:title" content="Clases de física universitaria online | BarbiDev" />
        <meta property="og:description" content="Para estudiantes de Física, Ingeniería y carreras afines. Clases en español por Zoom desde Ecuador. Cotiza por WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_EC" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://barbidev.com/ogbd.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clases de física universitaria online | BarbiDev" />
        <meta name="twitter:description" content="Física y métodos para universitarios. Clases en español por Zoom desde Ecuador. Cotiza por WhatsApp." />
        <meta name="twitter:image" content="https://barbidev.com/ogbd.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </Head>
      <SiteLayout currentPage="physics">
        <main id="contenido" className={styles.main}>
          <section className={styles.hero} aria-labelledby="physics-title">
            <div>
              <p className={styles.eyebrow}>FÍSICA · INGENIERÍA · CARRERAS AFINES</p>
              <h1 id="physics-title">Clases de física<br /><span>universitaria online.</span></h1>
              <p className={styles.intro}>Entiende los conceptos. Resuelve con confianza.</p>
              <div className={styles.actions}>
                <a className={styles.primary} href={bookingUrl} target="_blank" rel="noopener noreferrer">Cotizar mi clase <span aria-hidden="true">↗</span></a>
                <a className={styles.secondary} href="#materias">Ver materias ↓</a>
              </div>
              <p className={styles.note}>Zoom · En español · Desde Ecuador</p>
            </div>
            <HeroArtwork src="/images/physics-waves.webp" alt="Ondas luminosas violeta y cian atravesando un aro metálico" />
          </section>
          <dl className={styles.availability} aria-label="Disponibilidad de clases">
            <div><dt>Entre semana</dt><dd>19:00 – 21:00</dd></div>
            <div><dt>Fines de semana</dt><dd>A convenir</dd></div>
            <div><dt>Hora de Ecuador</dt><dd>UTC−5</dd></div>
          </dl>
          <section id="materias" className={styles.section} aria-labelledby="subjects-title">
            <div className={styles.sectionHeading}><h2 id="subjects-title">¿Qué estudiamos?</h2><Link href="/projects">Ver simulaciones ↗</Link></div>
            <ul className={styles.subjects}>
              {subjects.map((subject, index) => <li key={subject}><span aria-hidden="true">0{index + 1}</span><h3>{subject}</h3></li>)}
            </ul>
          </section>
          <section className={styles.contact} aria-labelledby="booking-title">
            <div><h2 id="booking-title">Tu próxima clase.</h2><p>Precio y duración por WhatsApp.</p></div>
            <a className={styles.primary} href={bookingUrl} target="_blank" rel="noopener noreferrer">Reservar <span aria-hidden="true">↗</span></a>
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
