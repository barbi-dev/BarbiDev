import type { ReactNode } from "react";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import styles from "../styles/home.module.css";

export default function SiteLayout({ currentPage, children }: {
  currentPage: "projects" | "questionnaires" | "physics";
  children: ReactNode;
}) {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#contenido">Ir al contenido</a>
      <Navbar currentPage={currentPage} />
      {children}
      <SiteFooter />
    </div>
  );
}
