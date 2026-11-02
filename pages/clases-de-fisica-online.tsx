import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import shared from "../styles/landing.module.css";
import styles from "../styles/physics.module.css";

const pageUrl = "https://barbidev.com/clases-de-fisica-online";
const bookingUrl = `https://wa.me/593987292609?text=${encodeURIComponent(
  "Hola Bárbara. Quiero cotizar clases de física universitaria online.\nCarrera y semestre: \nMateria y temas: \nObjetivo o fecha de examen: \nHorario disponible (hora de Ecuador): "
)}`;

const subjects = [
  { number: "01", title: "Física clásica", text: "Repasa los conceptos de tu curso y trabaja los problemas de física clásica de tu programa universitario." },
  { number: "02", title: "Física moderna", text: "Aborda los conceptos y ejercicios de física moderna con apoyo adaptado a tu materia y nivel." },
  { number: "03", title: "Física de las ondas", text: "Relaciona la interpretación física de los fenómenos ondulatorios con su descripción matemática." },
  { number: "04", title: "Métodos matemáticos", text: "Trabaja las herramientas matemáticas de tus asignaturas y su aplicación a problemas de física e ingeniería." },
  { number: "05", title: "Métodos numéricos", text: "Estudia los métodos de tu curso, su planteamiento y su aplicación para resolver problemas numéricamente." },
  { number: "06", title: "Otras materias de física", text: "Comparte tu temario universitario por WhatsApp para coordinar las clases según los contenidos que necesitas estudiar." },
];

const questions = [
  { q: "¿A quiénes están dirigidas las clases?", a: "A estudiantes universitarios de carreras de Física, Ingeniería y áreas afines. Las clases se coordinan según tu asignatura, semestre y temario." },
  { q: "¿Cómo se imparten las clases?", a: "Las clases son online, en español y por Zoom. Puedes compartir previamente tus temas, ejercicios y objetivos por WhatsApp para coordinar lo que necesitas trabajar." },
  { q: "¿Cuál es el precio y cuánto dura cada sesión?", a: "El precio y la duración se acuerdan por WhatsApp según la materia, los temas y tus necesidades. Solicita una cotización antes de reservar." },
  { q: "¿Qué horarios están disponibles?", a: "Entre semana, de 19:00 a 21:00, y todos los fines de semana con horario a convenir. La referencia es la hora de Ecuador continental (UTC−5). Confirma el espacio disponible por WhatsApp." },
  { q: "¿Puedo preparar un examen o revisar ejercicios?", a: "Sí. Indica la materia, los temas que quieres practicar y la fecha de tu examen al solicitar la cotización para organizar las clases." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Clases de física universitaria online",
  serviceType: "Clases particulares de física universitaria en español por Zoom",
  url: pageUrl,
  description: "Clases online para estudiantes de Física, Ingeniería y carreras afines. Física clásica, moderna y de las ondas, métodos matemáticos y métodos numéricos.",
  areaServed: { "@type": "Country", name: "Ecuador" },
  provider: { "@type": "Person", name: "Bárbara Villacis", url: "https://barbidev.com/" },
  audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Estudiantes universitarios de Física, Ingeniería y carreras afines" },
  availableChannel: { "@type": "ServiceChannel", serviceUrl: bookingUrl, availableLanguage: "es" },
};

export default function PhysicsClasses() {
  const [lang, setLang] = useState<"es" | "en">("es");
  return (
    <>
      <Head>
        <title>Clases de física universitaria online | BarbiDev Ecuador</title>
        <meta name="description" content="Clases de física universitaria online en español por Zoom. Física clásica, moderna, ondas y métodos matemáticos y numéricos. Ecuador. Cotiza por WhatsApp." />
        <meta property="og:title" content="Clases de física universitaria online | BarbiDev" />
        <meta property="og:description" content="Para estudiantes de Física, Ingeniería y carreras afines. Clases en español por Zoom desde Ecuador. Consulta horarios y cotiza por WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_EC" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://barbidev.com/ogbd.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clases de física universitaria online | BarbiDev" />
        <meta name="twitter:description" content="Física, métodos matemáticos y métodos numéricos. Clases en español por Zoom desde Ecuador. Cotiza por WhatsApp." />
        <meta name="twitter:image" content="https://barbidev.com/ogbd.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </Head>
      <div className={`${shared.page} ${styles.page}`}>
        <a href="#contenido" className={styles.skipLink}>Ir al contenido</a>
        <div className={shared.promo}>
          <span>Física universitaria · Online por Zoom</span>
        </div>
        <Navbar lang={lang} setLang={setLang} currentPage="physics" />
        <main id="contenido" className={styles.main}>
          <nav aria-label="Ruta de navegación" className={styles.breadcrumb}>
            <Link href="/">Inicio</Link><span aria-hidden="true">/</span><span>Clases de física</span>
          </nav>

          <section className={styles.hero} aria-labelledby="physics-title">
            <div>
              <p className={styles.eyebrow}>BARBIDEV AULA UNIVERSITARIA</p>
              <h1 id="physics-title">Clases de física <span>universitaria online.</span></h1>
              <p className={styles.intro}>Comprende los conceptos. Trabaja los problemas. Avanza en tu carrera.</p>
              <p className={styles.text}>Soy Bárbara Villacis. Te acompaño a estudiar las materias de física de tu carrera, con clases en español por Zoom desde Ecuador, para estudiantes de Física, Ingeniería y áreas afines.</p>
              <div className={styles.actions}>
                <a className={styles.primary} href={bookingUrl} target="_blank" rel="noopener noreferrer">Cotizar clases por WhatsApp <span aria-hidden="true">↗</span></a>
                <a className={styles.secondary} href="#materias">Explorar materias ↓</a>
              </div>
              <p className={styles.note}>Precio y duración a convenir por WhatsApp.</p>
            </div>
            <aside className={styles.schedule} aria-labelledby="schedule-title">
              <p className={styles.eyebrow}>TU PRÓXIMA CLASE</p>
              <h2 id="schedule-title">Un espacio para<br />entender la física.</h2>
              <dl>
                <div><dt>Modalidad</dt><dd>Online</dd></div>
                <div><dt>Entre semana</dt><dd>19:00 – 21:00</dd></div>
                <div><dt>Fines de semana</dt><dd>Horario a convenir</dd></div>
                <div><dt>Zona horaria</dt><dd>Ecuador continental  UTC−5</dd></div>
              </dl>
              <p className={styles.note}>Confirma disponibilidad y reserva por WhatsApp.</p>
            </aside>
          </section>

          <section id="materias" className={styles.section} aria-labelledby="subjects-title">
            <p className={styles.eyebrow}>DEL CONCEPTO AL EJERCICIO</p>
            <h2 id="subjects-title">¿Qué necesitas estudiar?</h2>
            <p className={styles.text}>Comparte el temario de tu materia para enfocar las clases en lo que estás viendo en la universidad.</p>
            <div className={styles.grid}>
              {subjects.map((subject) => <article className={styles.card} key={subject.number}>
                <span className={styles.number}>{subject.number}</span>
                <h3>{subject.title}</h3><p>{subject.text}</p>
              </article>)}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="process-title">
            <p className={styles.eyebrow}>ASÍ EMPEZAMOS</p>
            <h2 id="process-title">De tu primera duda a tu próxima clase.</h2>
            <ol className={styles.steps}>
              <li><h3>Cuéntame qué necesitas</h3><p>Envía por WhatsApp tu carrera, materia, temas y objetivo. Si tienes un examen, incluye la fecha.</p></li>
              <li><h3>Coordinamos tu reserva</h3><p>Acordamos el contenido, la duración, el precio y el horario antes de la clase.</p></li>
              <li><h3>Nos vemos en Zoom</h3><p>Trabajamos los conceptos y ejercicios que hayas acordado para la sesión, en español y en línea.</p></li>
            </ol>
          </section>

          <section className={`${styles.section} ${styles.resources}`} aria-labelledby="resources-title">
            <div><p className={styles.eyebrow}>EXPLORA LA FÍSICA</p><h2 id="resources-title">Mira los modelos en movimiento.</h2><p className={styles.text}>Explora mis simulaciones de péndulo doble y movimiento browniano: dos formas de observar cómo un modelo físico se convierte en una experiencia interactiva.</p></div>
            <Link href="/projects" className={styles.secondary}>Ver simulaciones de física ↗</Link>
          </section>

          <section className={styles.section} aria-labelledby="faq-title">
            <p className={styles.eyebrow}>ANTES DE RESERVAR</p>
            <h2 id="faq-title">Preguntas frecuentes</h2>
            <div className={styles.faq}>{questions.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
          </section>

          <section className={styles.contact} aria-labelledby="booking-title">
            <p className={styles.eyebrow}>EMPIEZA POR TU MATERIA</p>
            <h2 id="booking-title">¿Qué tema trabajamos juntos?</h2>
            <p>Escríbeme tu materia, los temas que necesitas repasar y tus horarios. Coordinamos tu clase por WhatsApp.</p>
            <a className={styles.primary} href={bookingUrl} target="_blank" rel="noopener noreferrer">Consultar precio y reservar ↗</a>
          </section>
        </main>
        <footer className={shared.footer}><span>© BarbiDev - Clases de física online (Ecuador)</span></footer>
      </div>
    </>
  );
}
