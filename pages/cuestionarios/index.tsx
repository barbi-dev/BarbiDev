import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import SocialIcons from "../../components/SocialIcons";
import styles from "../../styles/landing.module.css";

type Lang = "es" | "en";

export default function CuestionariosPage() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <>
      <Head>
        <title>BarbiDev | Cuestionarios</title>
        <meta
          name="description"
          content="Cuestionarios interactivos para diagnóstico académico, práctica guiada y preparación en matemática y razonamiento."
        />
      </Head>

      <div className={styles.page}>
        <div className={styles.promo}>
          <span>
            {lang === "es"
              ? "Asesorías 1:1 · Diagnóstico real · Agenda ahora"
              : "1:1 coaching · Real diagnosis · Book now"}
          </span>
          <a
            className={styles.promoLink}
            href="https://wa.me/593987292609"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp →
          </a>
        </div>

        <Navbar lang={lang} setLang={setLang} currentPage="questionnaires" />

        <main className={styles.main}>
          <div className="bg" />

          <section className="wrap">
            <header className="hero">
              <div className="heroText">
                <div className="kicker">
                  {lang === "es"
                    ? "BARBIDEV · CUESTIONARIOS"
                    : "BARBIDEV · QUESTIONNAIRES"}
                </div>

                <h1 className="title">
                  {lang === "es"
                    ? "Descubre tu nivel actual"
                    : "Discover your current level"}
                </h1>

                <p className="sub">
                  {lang === "es"
                    ? "Herramientas interactivas para detectar fortalezas, debilidades y necesidades de refuerzo en matemática, razonamiento y preparación académica."
                    : "Interactive tools to detect strengths, weaknesses, and reinforcement needs in mathematics, reasoning, and academic preparation."}
                </p>

                <div className="ctaRow">
                  <a
                    href="https://quiz.barbidev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnPrimary"
                  >
                    {lang === "es"
                      ? "Abrir cuestionario"
                      : "Open questionnaire"}
                  </a>

                  <a
                    href="https://wa.me/593987292609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnSecondary"
                  >
                    {lang === "es"
                      ? "Solicitar asesoría"
                      : "Request coaching"}
                  </a>
                </div>
              </div>

              <div className="heroCard">
                <div className="heroCardGlow" />
                <div className="heroCardInner">
                  <div className="miniLabel">
                    {lang === "es" ? "DIAGNÓSTICO" : "DIAGNOSIS"}
                  </div>

                  <h2 className="cardTitle">
                    {lang === "es"
                      ? "Evaluación inteligente"
                      : "Smart evaluation"}
                  </h2>

                  <p className="cardText">
                    {lang === "es"
                      ? "Obtén un resultado automático con nivel general, fortalezas, debilidades prioritarias y recomendación académica."
                      : "Get an automatic result with overall level, strengths, priority weaknesses, and academic recommendation."}
                  </p>

                  <div className="stats">
                    <div className="stat">
                      <span className="statValue">01</span>
                      <span className="statLabel">
                        {lang === "es" ? "Cuestionario activo" : "Active questionnaire"}
                      </span>
                    </div>

                    <div className="stat">
                      <span className="statValue">3X</span>
                      <span className="statLabel">
                        {lang === "es"
                          ? "Más claridad diagnóstica"
                          : "More diagnostic clarity"}
                      </span>
                    </div>

                    <div className="stat">
                      <span className="statValue">24/7</span>
                      <span className="statLabel">
                        {lang === "es" ? "Acceso web" : "Web access"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section className="grid">
              <article className="mainCard">
                <div className="cardBadge">
                  {lang === "es" ? "ACTIVO" : "LIVE"}
                </div>

                <h3 className="mainCardTitle">
                  {lang === "es"
                    ? "Cuestionario interactivo de diagnóstico"
                    : "Interactive diagnostic questionnaire"}
                </h3>

                <p className="mainCardText">
                  {lang === "es"
                    ? "Diseñado para práctica, seguimiento y evaluación del estudiante. Ideal para identificar vacíos reales antes de planificar un refuerzo académico."
                    : "Designed for practice, follow-up, and student assessment. Ideal for identifying real gaps before planning academic reinforcement."}
                </p>

                <div className="tags">
                  <span className="tag">
                    {lang === "es" ? "Diagnóstico" : "Diagnosis"}
                  </span>
                  <span className="tag">
                    {lang === "es" ? "Resultados automáticos" : "Automatic results"}
                  </span>
                  <span className="tag">
                    {lang === "es" ? "Análisis por temas" : "Topic analysis"}
                  </span>
                </div>

                <div className="cardActions">
                  <a
                    href="https://quiz.barbidev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnPrimary"
                  >
                    {lang === "es"
                      ? "Iniciar ahora"
                      : "Start now"}
                  </a>

                  <a
                    href="https://wa.me/593987292609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghostLink"
                  >
                    {lang === "es"
                      ? "Pedir tutoría después del test"
                      : "Request tutoring after the test"}
                  </a>
                </div>
              </article>

            </section>

            <section className="benefits">

              <h2 className="sectionTitle">
                {lang === "es"
                  ? "Más que un test: una herramienta de diagnóstico"
                  : "More than a test: a diagnostic tool"}
              </h2>

              <div className="benefitGrid">
                <article className="benefitCard">
                  <h3>
                    {lang === "es"
                      ? "Diagnóstico rápido"
                      : "Fast diagnosis"}
                  </h3>
                  <p>
                    {lang === "es"
                      ? "Permite detectar en poco tiempo qué contenidos domina y cuáles necesita reforzar el estudiante."
                      : "Quickly detects which contents the student masters and which ones need reinforcement."}
                  </p>
                </article>

                <article className="benefitCard">
                  <h3>
                    {lang === "es"
                      ? "Base para tutoría"
                      : "Tutoring baseline"}
                  </h3>
                  <p>
                    {lang === "es"
                      ? "Facilita diseñar clases más precisas, con foco en debilidades reales y no en suposiciones."
                      : "Helps design more precise sessions focused on real weaknesses instead of assumptions."}
                  </p>
                </article>

                <article className="benefitCard">
                  <h3>
                    {lang === "es"
                      ? "Escalable"
                      : "Scalable"}
                  </h3>
                  <p>
                    {lang === "es"
                      ? "Se puede expandir a nuevos cuestionarios, materias, niveles y procesos de seguimiento."
                      : "It can scale to new questionnaires, subjects, levels, and follow-up processes."}
                  </p>
                </article>
              </div>
            </section>
          </section>
          <section className="section1">
            <SocialIcons />
          </section>

          <style jsx>{`
            .bg {
              position: fixed;
              inset: 0;
              background:
                radial-gradient(1000px 700px at 18% 18%, rgba(0,255,255,0.10), transparent 55%),
                radial-gradient(900px 600px at 82% 35%, rgba(255,0,255,0.08), transparent 60%),
                linear-gradient(180deg, #050614 0%, #070814 60%, #050614 100%);
              z-index: -1;
            }

            .wrap {
              max-width: 1100px;
              margin: 0 auto;
              padding: 34px 40px 70px;
            }

            .hero {
              display: grid;
              grid-template-columns: 1.2fr 0.9fr;
              gap: 48px;
              align-items: stretch;
              margin-bottom: 28px;
            }

            .heroText {
              padding: 18px 0 10px;
            }

            .kicker {
              font-size: 12px;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: rgba(255,255,255,0.60);
            }

            .title {
              margin: 10px 0 12px;
              font-size: clamp(2.4rem, 5vw, 4.2rem);
              font-weight:900;
              line-height: 1.03;
              color: rgba(255,255,255,0.96);
              max-width: 760px;
            }

            .sub {
              margin: 0;
              max-width: 720px;
              color: rgba(255,255,255,0.72);
              line-height: 1.75;
              font-size: 1.05rem;
            }

            .ctaRow {
              display: flex;
              gap: 12px;
              flex-wrap: wrap;
              margin-top: 24px;
            }

            .btnPrimary,
            .btnSecondary {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              border-radius: 14px;
              padding: 12px 18px;
              transition: 180ms ease;
            }

            .btnPrimary {
              color: #071018;
              background: linear-gradient(90deg, rgba(0,255,255,0.92), rgba(255,0,255,0.88));
              box-shadow: 0 0 26px rgba(255,0,255,0.18);
              font-weight: 700;
            }

            .btnPrimary:hover {
              transform: translateY(-1px);
              box-shadow: 0 0 34px rgba(0,255,255,0.18);
            }

            .btnSecondary {
              color: rgba(255,255,255,0.9);
              border: 1px solid rgba(255,255,255,0.14);
              background: rgba(255,255,255,0.03);
            }

            .btnSecondary:hover {
              border-color: rgba(0,255,255,0.30);
              background: rgba(255,255,255,0.05);
            }

            .heroCard {
              position: relative;
              border-radius: 24px;
              overflow: hidden;
              border: 1px solid rgba(255,255,255,0.10);
              background: rgba(255,255,255,0.04);
              box-shadow: 0 18px 60px rgba(0,0,0,0.40);
              min-height: 100%;
            }

            .heroCardGlow {
              position: absolute;
              inset: -20%;
              background:
                radial-gradient(circle at 30% 30%, rgba(0,255,255,0.12), transparent 35%),
                radial-gradient(circle at 70% 70%, rgba(255,0,255,0.12), transparent 38%);
              pointer-events: none;
            }

            .heroCardInner {
              position: relative;
              z-index: 1;
              padding: 24px;
            }

            .miniLabel {
              display: inline-block;
              font-size: 11px;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: rgba(0,255,255,0.9);
              margin-bottom: 12px;
            }

            .cardTitle {
              margin: 0 0 10px;
              font-size: 1.6rem;
              color: rgba(255,255,255,0.95);
            }

            .cardText {
              margin: 0;
              color: rgba(255,255,255,0.72);
              line-height: 1.7;
            }

            .stats {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 10px;
              margin-top: 22px;
            }

            .stat {
              border: 1px solid rgba(255,255,255,0.08);
              background: rgba(255,255,255,0.03);
              border-radius: 16px;
              padding: 14px 12px;
            }

            .statValue {
              display: block;
              font-size: 1.4rem;
              font-weight: 800;
              color: rgba(255,255,255,0.95);
            }

            .statLabel {
              display: block;
              margin-top: 6px;
              font-size: 0.86rem;
              color: rgba(255,255,255,0.64);
              line-height: 1.45;
            }

            .grid {
              display: grid;
              gap: 18px;
              margin-top: 10px;
            }

            .mainCard,
            .benefitCard {
              border-radius: 22px;
              border: 1px solid rgba(255,255,255,0.10);
              background: rgba(255,255,255,0.04);
              box-shadow: 0 12px 40px rgba(0,0,0,0.35);
            }

            .mainCard {
              padding: 24px;
            }

            .cardBadge {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 7px 12px;
              border-radius: 999px;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 0.12em;
              color: rgba(0,255,255,0.94);
              background: rgba(0,255,255,0.08);
              border: 1px solid rgba(0,255,255,0.24);
              margin-bottom: 14px;
            }

            .mainCardTitle {
              margin: 0 0 10px;
              font-size: 1.8rem;
              color: rgba(255,255,255,0.95);
            }

            .mainCardText {
              margin: 0;
              color: rgba(255,255,255,0.72);
              line-height: 1.75;
              max-width: 700px;
            }

            .tags {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
              margin: 18px 0 18px;
            }

            .tag {
              font-size: 12px;
              color: rgba(255,255,255,0.74);
              padding: 7px 12px;
              border-radius: 999px;
              border: 1px solid rgba(255,255,255,0.10);
              background: rgba(0,0,0,0.18);
            }

            .cardActions {
              display: flex;
              gap: 14px;
              flex-wrap: wrap;
              align-items: center;
            }

            .ghostLink {
              color: rgba(0,255,255,0.9);
              text-decoration: none;
            }

            .ghostLink:hover {
              text-decoration: underline;
            }

            .infoTitle {
              margin: 0 0 12px;
              font-size: 1.3rem;
              color: rgba(255,255,255,0.94);
            }

            .featureList {
              margin: 0;
              padding-left: 18px;
              color: rgba(255,255,255,0.72);
              line-height: 1.9;
            }

            .benefits {
              margin-top: 34px;
            }


            .sectionTitle {
              margin: 0 0 18px;
              font-size: clamp(1.8rem, 4vw, 2.8rem);
              line-height: 1.1;
              color: rgba(255,255,255,0.95);
              max-width: 760px;
            }

            .benefitGrid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 14px;
            }

            .benefitCard {
              padding: 20px;
            }

            .benefitCard h3 {
              margin: 0 0 10px;
              font-size: 1.1rem;
              color: rgba(255,255,255,0.94);
            }

            .benefitCard p {
              margin: 0;
              color: rgba(255,255,255,0.70);
              line-height: 1.7;
            }

            @media (max-width: 980px) {
              .hero,
              .grid,
              .benefitGrid {
                grid-template-columns: 1fr;
              }
            }

            @media (max-width: 760px) {
              .wrap {
                padding: 22px 12px 40px;
              }

              .title {
                font-size: 2.2rem;
              }

              .stats {
                grid-template-columns: 1fr;
              }

              .ctaRow,
              .cardActions {
                flex-direction: column;
                align-items: stretch;
              }

              .btnPrimary,
              .btnSecondary {
                width: 100%;
              }
            }
          `}</style>
        </main>

        <footer className={styles.footer}>
          <span>
            {lang === "es"
              ? "© BarbiDev · Estadística & Programación · Ecuador"
              : "© BarbiDev · Statistics & Programming · Ecuador / Remote"}
          </span>
        </footer>
      </div>
    </>
  );
}