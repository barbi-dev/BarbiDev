import { useEffect, useMemo, useState, useRef } from "react";
import styles from "../styles/landing.module.css";
import ProofIcon from "./ProofIcons";
import SocialIcons from "./SocialIcons"; 
import GithubModalContent from "./GithubModal";
import ProjectsModalContent from "./ProjectsModal";
import VisualizerModalContent from "./VisualizerModal";
import TestimonialsModalContent from "./TestimonialsModal";


type Lang = "es" | "en";

const copy = {
  es: {
    nav: { services: "Servicios", work: "Proyectos", store: "Tienda", about: "About", contact: "Contact" },
    promo: "Asesorías 1:1 · Respuesta rápida según disponibilidad",
    headline: "Hola, soy ",
    headline2:" BarbiDev",
    subheadline:
      "Experta en análisis estadístico y programación en Python para tesis, artículos científicos e investigaciones.",
    promise:
      "Resolver la problemática no es solo entregar el producto final. Es un proceso que implica guiarte, enseñarte y prepararte para que puedas defender resultados con seguridad.",
    ctaPrimary: "Asesoría en WhatsApp",
    ctaSecondary: "Ver Servicios",
    badges: ["Tesis & Artículos", "Datos • Modelos • Panel", "Dashboards • Simulaciones"],
    workTitle: "Elige según tu necesidad",
    workIntro: "Dos caminos, un mismo objetivo: resultados sólidos y defendibles.",
    routeStats: {
      title: "Estadística para investigación",
      bullets: [
        "Limpieza, descriptivo y visualización",
        "Pruebas (t, ANOVA, χ², no paramétricas)",
        "Correlación y asociación",
        "Regresión (lineal / logística) + diagnóstico",
        "Panel / longitudinal (FE/RE) si aplica",
        "Tablas y redacción de resultados listos para tesis",
      ],
      button: "Más información",
    },
    routePy: {
      title: "Python para datos y simulaciones",
      bullets: [
        "Simulaciones (física / modelos) con rigor",
        "Automatización de análisis y reportes",
        "Dashboards y visualización pro",
        "Estructura de proyecto + buenas prácticas",
        "Interpretación de resultados (no solo código)",
      ],
      button: "Más información",
    },
    proofTitle: "UN VISTAZO A MI TRABAJO",
    proofCards: [
      { icon: "projects", k: "Proyectos", v: "Enfoque metodológico aplicado" },
      { icon: "visualizer", k: "Visualizador", v: "Capturas de productos entregados" },
      { icon: "github", k: "GitHub", v: "Código y demos gratis" },
      { icon: "testimonials", k: "Testimonios", v: "Opiniones de clientes" },
    ],
    faqTitle: "FAQ",
    faq: [
      {
        q: "¿Haces la tesis por mí?",
        a: "Te asesoro y te enseño a ejecutar e interpretar, para que puedas justificarlo y defenderlo ante tu tribunal.",
      },
      { q: "¿Qué necesito para iniciar?", a: "Tu base de datos, tu pregunta/objetivo y tu fecha límite." },
      { q: "¿Trabajas con urgencias?", a: "Sí, según disponibilidad. Te digo tiempos reales antes de empezar." },
    ],
    contactTitle: "Listo/a para avanzar",
    contactIntro: "Escríbeme por WhatsApp y te respondo con un plan claro (y realista).",
    footer: "© BarbiDev · Estadística & Python · Ecuador / Online",
  },
  en: {
    nav: { services: "Services", work: "Work", store: "Store", about: "About", contact: "Contact" },
    promo: "1:1 coaching · Fast response based on availability",
    headline: "Hi, I'm",
    headline2:"BarbiDev",
    subheadline:
      "I help you with statistical analysis and Python projects for theses, papers, and research.",
    promise:
      "Solving the problem is not just about delivering the final product. It's a process that involves guiding you, teaching you, and preparing you to confidently defend your results.",
    ctaPrimary: "Coaching on WhatsApp",
    ctaSecondary: "See Services",
    badges: ["Theses & Papers", "Data • Models • Panel", "Dashboards • Simulations"],
    workTitle: "Choose according to your need",
    workIntro: "Two paths, same goal: solid, defensible results.",
    routeStats: {
      title: "Statistics for research",
      bullets: [
        "Cleaning, descriptive stats & viz",
        "Tests (t, ANOVA, χ², non-parametric)",
        "Correlation & association",
        "Regression (linear / logistic) + diagnostics",
        "Panel / longitudinal (FE/RE) when relevant",
        "Publication-ready tables + results writing",
      ],
      button: "More info",
    },
    routePy: {
      title: "Python for data & simulations",
      bullets: [
        "Simulations (physics / models) with rigor",
        "Automate analysis & reporting",
        "Dashboards + pro viz",
        "Project structure + best practices",
        "Interpretation (not just code)",
      ],
      button: "More info",
    },
    proofTitle: "A GLIMPSE OF MY WORK",
    proofCards: [
      { icon: "projects", k: "Projects", v: "Methodological approach applied" },
      { icon: "visualizer", k: "Visualizer", v: "Screenshots of delivered products" },
      { icon: "github", k: "GitHub", v: "Free code and demos" },
      { icon: "testimonials", k: "Testimonials", v: "Customer reviews" },
    ],

    faqTitle: "FAQ",
    faq: [
      {
        q: "Do you do the thesis for me?",
        a: "I guide and teach you to execute and interpret, so you can justify and defend it.",
      },
      { q: "What do you need to start?", a: "Your dataset, research goal, and deadline." },
      { q: "Do you handle urgent cases?", a: "Yes, depending on availability. I confirm realistic timing upfront." },
    ],
    contactTitle: "Ready to move forward",
    contactIntro: "Message me on WhatsApp and I’ll reply with a clear (realistic) plan.",
    footer: "© BarbiDev · Statistics & Python · Ecuador / Remote",
  },
} satisfies Record<Lang, any>;

function buildWhatsAppLink(message: string) {
  const phone = "593987292609";
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 920) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];

  const waGeneral = useMemo(() => {
    const msg =
      lang === "es"
        ? `Hola Bárbara. Necesito asesoría en:  `
        : `Hi BarbiDev. I need guidance with:  `;
    return buildWhatsAppLink(msg);
  }, [lang]);

  const waStats = useMemo(() => {
    const msg =
      lang === "es"
        ? `Hola Bárbara. Quiero tu asesoría en un ANÁLISIS ESTADÍSTICO.\n\nNivel: \nTema: \nBase de datos (qué formato): \nFecha límite: \nQué necesitas lograr: `
        : `Hi. I would like your assistance with a STATISTICAL ANALISYS.\n\nLevel: \nTopic: \nDataset format: \nDeadline: \nGoal: `;
    return buildWhatsAppLink(msg);
  }, [lang]);

  const waPy = useMemo(() => {
    const msg =
      lang === "es"
        ? `Hola Bárbara. Quiero tu asesoría para un proyecto de programación.\n\nTipo: (datos/simulación/dashboard)\nEstado actual: \nEntregable: \nFecha límite: \nRepositorio/archivo: `
        : `Hi. I  would like your assistance with a programming project.\n\nType: (data/simulation/dashboard)\nCurrent status: \nDeliverable: \nDeadline: \nRepo/file: `;
    return buildWhatsAppLink(msg);
  }, [lang]);
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const header = headerRef.current;
      if (!header) return;
      const onScroll = () => {
        header.classList.toggle(styles.headerScrolled, window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

type ModalKey = null | "projects" | "visualizer" | "github" | "testimonials";
const [modal, setModal] = useState<ModalKey>(null);

useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setModal(null);
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, []);
useEffect(() => {
  if (!modal) return;
  const prev = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = prev;
  };
}, [modal]);


  return (
    <div className={styles.page}>
      {/* Top promo bar */}
      <div className={styles.promo} data-sticky="promo">
        <span>{t.promo}</span>
        <a className={styles.promoLink} href={waGeneral} target="_blank" rel="noreferrer">
          WhatsApp →
        </a>
      </div>

      {/* Nav */}
      <header ref={headerRef} className={styles.header} data-sticky="header">
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>◆</span>
            <a className={styles.brandName} href="#top">BarbiDev</a>
          </div>

          {/* Desktop links */}
          <div className={styles.navLinks}>
            <a href="#services1">{t.nav.services}</a>
            <a href="/projects" rel="noopener noreferrer">{t.nav.work}</a>
            <a href="#store">{t.nav.store}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>

          {/* Right actions (lang + burger) */}
          <div className={styles.navRight}>
            <button
              className={styles.langToggle}
              onClick={() => setLang((p) => (p === "es" ? "en" : "es"))}
              aria-label="Toggle language"
            >
              {lang === "es" ? "ES" : "EN"}
            </button>

            <button
              className={styles.burger}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={styles.burgerLines} />
            </button>
          </div>
        </nav>

        {/* Overlay click-to-close */}
        {menuOpen && (
          <button
            className={styles.menuOverlay}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile dropdown */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
          <a href="#services1" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="/projects" onClick={() => setMenuOpen(false)}>{t.nav.work}</a>
          <a href="#store" onClick={() => setMenuOpen(false)}>{t.nav.store}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
        </div>
      </header>


      {/* Hero */}
      <main className={styles.main}>
        <section className={`${styles.hero} ${styles.anchor}`} id="services">
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitlePixel}>
                {t.headline} <br />
                <span className={styles.heroName}>{t.headline2}</span></h1>

            <p className={styles.subheadline}>{t.subheadline}</p>
            <p className={styles.promise}>{t.promise}</p>

            <div className={styles.ctas}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href={waGeneral} target="_blank" rel="noreferrer">
                {t.ctaPrimary}
              </a>
              <a className={`${styles.btn} ${styles.btnGlass}`} href="#work">
                {t.ctaSecondary}
              </a>
            </div>

            <div className={styles.badges}>
              {t.badges.map((b: string) => (
                <span key={b} className={styles.badge}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.heroRight}>
            {/* Pon tu foto cuando la tengas: /public/tu-foto.jpg */}
            <div className={styles.heroCard}>
              <div className={styles.heroImgWrap}>
                <img className={styles.heroImg} src="/brand.png" alt="BarbiDev" />
              </div>
              <div className={styles.techTags}>
                {["Python","R","SPSS","Matlab","Latex","HTML","CSS","Kaggle","Qiskit","More...",

                 ].map((tech) => (
                 <span key={tech} className={styles.techTag}>{tech}</span>))}
              </div>
            </div>
          </div>
        </section>

        {/* Work routes */}
        <section className={`${styles.section} ${styles.anchor}`} id="services1">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{t.workTitle}</h2>
            <p className={styles.lead}>{t.workIntro}</p>
          </div>

          <div className={styles.routes}>
            <div className={`${styles.routeCard} ${styles.routeStats}`}>
              <div className={styles.routeTop}>
                <h3>{t.routeStats.title}</h3>
                <span className={styles.routeTag}>#FF00FF</span>
              </div>
              <ul>
                {t.routeStats.bullets.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href={waStats} target="_blank" rel="noreferrer">
                {t.routeStats.button}
              </a>
            </div>

            <div className={`${styles.routeCard} ${styles.routePy}`}>
              <div className={styles.routeTop}>
                <h3>{t.routePy.title}</h3>
                <span className={styles.routeTagAlt}>#00FFFF</span>
              </div>
              <ul>
                {t.routePy.bullets.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <a className={`${styles.btn} ${styles.btnGlass}`} href={waPy} target="_blank" rel="noreferrer">
                {t.routePy.button}
              </a>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className={`${styles.section} ${styles.anchor}`} id="about">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{t.proofTitle}</h2>
          </div>

          <div className={styles.grid4}>
            {t.proofCards.map((c: any) => (
              <div key={c.k} className={styles.proofCard}
              role="button" tabIndex={0} onClick={() => setModal(c.icon)}>
                <ProofIcon
                  name={c.icon}
                  size={36}
                  className={styles.proofIcon}
                />
                <div className={styles.proofK}><span>{c.k}</span>
                </div>
                <div className={styles.proofV}>{c.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{t.faqTitle}</h2>
          </div>

          <div className={styles.faq}>
            {t.faq.map((item: any) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={`${styles.contact} ${styles.anchor}`} id="contact">
          <div className={styles.contactInner}>
            <h2 className={styles.h2}>{t.contactTitle}</h2>
            <p className={styles.lead}>{t.contactIntro}</p>
            <a className={`${styles.btn} ${styles.btnPrimary}`} href={waGeneral} target="_blank" rel="noreferrer">
              {t.ctaPrimary}
            </a>
          </div>
        </section>

        {/* Store placeholder */}
        <section className={`${styles.section} ${styles.anchor}`} id="store">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Store</h2>
            <p className={styles.lead}>
              Guías, mini-cursos o recursos descargables.
            </p>
          </div>
        </section>
        <section className={styles.section}>
            <SocialIcons />
        </section>
      </main>
      {modal && (
        <div className={styles.modalOverlay} onClick={() => setModal(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setModal(null)} aria-label="Close">
              ✕
            </button>

            {modal === "projects" && <ProjectsModalContent />}
            {modal === "visualizer" && <VisualizerModalContent />}
            {modal === "github" && <GithubModalContent />}
            {modal === "testimonials" && <TestimonialsModalContent />}
          </div>
        </div>
      )}

      


      <footer className={styles.footer}>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}
