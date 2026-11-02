import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/home.module.css";

type Page = "home" | "projects" | "questionnaires" | "physics";

export default function Navbar({ currentPage = "home" }: { currentPage?: Page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const booking = `https://wa.me/593987292609?text=${encodeURIComponent("Hola Bárbara. Quiero cotizar clases online.\nCarrera y semestre: \nTemas que necesito trabajar: \nHorario disponible: ")}`;
  const links: { href: string; label: string; page?: Page }[] = [
    { href: currentPage === "home" ? "#services1" : "/#services1", label: "Servicios" },
    { href: "/clases-de-fisica-online", label: "Clases de física", page: "physics" },
    { href: "/projects", label: "Proyectos", page: "projects" },
    { href: "/cuestionarios", label: "Cuestionarios", page: "questionnaires" },
    { href: currentPage === "home" ? "#about" : "/#about", label: "Cómo aprendes" },
  ];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 1040) setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegación principal">
        <Link className={styles.logo} href="/" aria-label="BarbiDev, inicio">
          <img src="/icono.png" width="32" height="32" alt="" />
          <span>barbi<span className={styles.logoAccent}>dev</span><span className={styles.logoDot}>.</span></span>
        </Link>
        <div className={styles.desktopLinks}>{links.map(link => <Link href={link.href} key={link.label} aria-current={link.page === currentPage ? "page" : undefined}>{link.label}</Link>)}</div>
        <a className={styles.navCta} href={booking} target="_blank" rel="noopener noreferrer">Reserva tu clase <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a>
        <button ref={menuButton} className={styles.menuButton} type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen(!menuOpen)}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={menuOpen ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} /></svg></button>
      </nav>
      <div id="site-menu" className={styles.mobileLinks} hidden={!menuOpen}>
        {links.map(link => <Link href={link.href} key={link.label} aria-current={link.page === currentPage ? "page" : undefined} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
        <a href={booking} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Reservar por WhatsApp ↗</a>
      </div>
    </header>
  );
}
