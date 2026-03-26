import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/landing.module.css";

type Lang = "es" | "en";

type NavbarProps = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
  currentPage?: "home" | "projects" | "questionnaires";
};

const copy = {
  es: {
    nav: {
      services: "Servicios",
      work: "Proyectos",
      questionnaires: "Cuestionarios",
      about: "About",
      contact: "Contact",
    },
  },
  en: {
    nav: {
      services: "Services",
      work: "Projects",
      questionnaires: "Questionnaires",
      about: "About",
      contact: "Contact",
    },
  },
} as const;

export default function Navbar({
  lang,
  currentPage = "home",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const t = copy[lang];

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

  const navHref = {
    services: currentPage === "home" ? "#services1" : "/#services1",
    work: "/projects",
    questionnaires: "/cuestionarios",
    about: currentPage === "home" ? "#about" : "/#about",
    contact: currentPage === "home" ? "#contact" : "/#contact",
  };

  return (
    <header ref={headerRef} className={styles.header} data-sticky="header">
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link className={styles.brandName} href="/">
            <img src="/icono.png" alt="BarbiDev" width={48} />
          </Link>
        </div>

        <div className={styles.navLinks}>
          <Link href={navHref.services}>{t.nav.services}</Link>
          <Link href={navHref.work}>{t.nav.work}</Link>
          <Link href={navHref.questionnaires}>{t.nav.questionnaires}</Link>
          <Link href={navHref.about}>{t.nav.about}</Link>
          <Link href={navHref.contact}>{t.nav.contact}</Link>
        </div>

        <div className={styles.navRight}>

          <button
            className={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
          >
            <span className={styles.burgerLines} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <button
          className={styles.menuOverlay}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          type="button"
        />
      )}

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <Link href={navHref.services} onClick={() => setMenuOpen(false)}>
          {t.nav.services}
        </Link>
        <Link href={navHref.work} onClick={() => setMenuOpen(false)}>
          {t.nav.work}
        </Link>
        <Link href={navHref.questionnaires} onClick={() => setMenuOpen(false)}>
          {t.nav.questionnaires}
        </Link>
        <Link href={navHref.about} onClick={() => setMenuOpen(false)}>
          {t.nav.about}
        </Link>
        <Link href={navHref.contact} onClick={() => setMenuOpen(false)}>
          {t.nav.contact}
        </Link>
      </div>
    </header>
  );
}