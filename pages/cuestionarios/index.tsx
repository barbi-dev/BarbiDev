import Head from "next/head";
import SiteLayout from "../../components/SiteLayout";
import HeroArtwork from "../../components/HeroArtwork";
import ui from "../../styles/home.module.css";
import styles from "../../styles/interior.module.css";

const quizUrl = "https://quiz.barbidev.com";
const coachingUrl = `https://wa.me/593987292609?text=${encodeURIComponent("Hola Bárbara. Quiero asesoría a partir de mi cuestionario.\nTemas por reforzar: \nCarrera y semestre: ")}`;

export default function CuestionariosPage() {
  return (
    <>
      <Head>
        <title>Cuestionarios de diagnóstico académico | BarbiDev</title>
        <meta name="description" content="Descubre tu nivel con los cuestionarios interactivos de BarbiDev. Identifica fortalezas, temas por reforzar y tu siguiente paso académico." />
      </Head>
      <SiteLayout currentPage="questionnaires">
        <main id="contenido" className={styles.main}>
          <section className={styles.quizHero} aria-labelledby="quiz-title">
            <div>
              <p className={ui.eyebrow}><span className={ui.statusDot} /> CUESTIONARIOS ONLINE</p>
              <h1 id="quiz-title">Conoce tu nivel.<br /><span>Avanza con foco.</span></h1>
              <p className={styles.lead}>Descubre qué dominas y qué reforzar.</p>
              <div className={styles.actions}>
                <a href={quizUrl} target="_blank" rel="noopener noreferrer" className={ui.primary}>Iniciar cuestionario <span aria-hidden="true">↗</span></a>
                <a href={coachingUrl} target="_blank" rel="noopener noreferrer" className={ui.secondary}>Pedir asesoría <span aria-hidden="true">↗</span></a>
              </div>
              <ul className={styles.quizFacts}><li>Resultados automáticos</li><li>Análisis por temas</li></ul>
            </div>
            <HeroArtwork src="/images/quiz-crystal.webp" alt="Cubo de cristal violeta con escalones flotantes y una esfera luminosa cian" />
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
