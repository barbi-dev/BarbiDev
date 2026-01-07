// components/ProjectsModalContent.tsx
import React from "react";

type Project = {
  title: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

const projects: Project[] = [
  {
    title: "Análisis de Chi cuadrado y Odds Ratio",
    description:
      "Proyecto de estadística descriptiva seguido de análisis Chi-cuadrado para investigar factores asociados en estudios psicológicos con jóvenes y adultos. Se elaboraron tablas y gráficas con interpretación guiada para el cliente.",
    highlights: ["Tablas cruzadas", "Chi-cuadrado", "Odds Ratio (OR)"],
    tags: ["Estadística", "SPSS","R", "Interpretación"],
    links: [
      { label: "Ver caso", href: "#" },
      { label: "Repositorio", href: "#" },
    ],
  },
  {
    title: "Simulación con cálculo variacional",
    description:
      "Proyecto para estudiante universitario: comparación de tiempos de descenso de un cuerpo y representación visual del fenómeno.",
    highlights: ["Comparación de trayectorias", "Visualización"],
    tags: ["Física", "Cálculo variacional", "Python"],
    links: [{ label: "Demo", href: "#" }],
  },
  {
    title: "Simulación de sistemas dinámicos no lineales",
    description:
      "Proyecto para estudiante universitario: aplicación de ecuaciones de Euler-Lagrange y análisis de sensibilidad a variaciones iniciales.",
    highlights: ["Euler–Lagrange", "Sensibilidad a condiciones iniciales"],
    tags: ["Mecánica clásica", "Dinámica no lineal", "Simulación"],
    links: [{ label: "Repositorio", href: "#" }],
  },
  {
    title: "Análisis de datos de panel",
    description:
      "Trabajo con datos satelitales de variables meteorológicas para explorar su asociación con la transmisión de COVID-19.",
    highlights: ["Datos satelitales", "Modelos de panel"],
    tags: ["Econometría", "Panel data", "COVID-19"],
    links: [{ label: "Informe", href: "#" }],
  },
  {
    title: "Simulación de gravitación universal",
    description:
      "Proyecto para estudiante universitaria: explicación del movimiento planetario usando métodos de integración numérica y comparación con enfoques analíticos.",
    highlights: ["Integración numérica", "Comparación analítica"],
    tags: ["Gravitación", "Runge–Kutta", "Órbitas"],
    links: [{ label: "Demo", href: "#" }],
  },
];

const sectionStyle: React.CSSProperties = {
  display: "grid",
  gap: 12,
};

const headerStyle: React.CSSProperties = {
  marginBottom: 8,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  borderRadius: 16,
  padding: 14,
};

const titleRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 12,
};

const titleStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  margin: 0,
};

const descStyle: React.CSSProperties = {
  margin: "8px 0 0 0",
  lineHeight: 1.45,
};

const metaRowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 10,
};

const pillStyle: React.CSSProperties = {
  fontSize: 12,
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(0,0,0,0.12)",
};

const linksStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  marginTop: 12,
};

const linkStyle: React.CSSProperties = {
  fontSize: 13,
  textDecoration: "underline",
  opacity: 0.95,
  color: "#00ffff",
};

export default function ProjectsModalContent() {
  return (
    <section style={sectionStyle} aria-label="Projects">
      <header style={headerStyle}>
        <h3 style={{ margin: 0, fontSize: 24, color: "#ff4500",fontWeight:700, }}>Proyectos</h3>
        <p style={{ margin: "6px 0 0 0", opacity: 0.85 }}>
          Aquí te dejo una pequeña descripción de los 5 proyectos más representativos para diversos clientes.
        </p>
      </header>

      {projects.map((p) => (
        <article key={p.title} style={cardStyle}>
          <div style={titleRowStyle}>
            <h4 style={titleStyle}>{p.title}</h4>
          </div>

          <p style={descStyle}>{p.description}</p>

          {!!p.highlights?.length && (
            <div style={metaRowStyle}>
              {p.highlights.map((h) => (
                <span key={h} style={pillStyle}>
                  {h}
                </span>
              ))}
            </div>
          )}

          {!!p.tags?.length && (
            <div style={metaRowStyle}>
              {p.tags.map((t) => (
                <span key={t} style={{ ...pillStyle, opacity: 0.9 }}>
                  {t}
                </span>
              ))}
            </div>
          )}

          {!!p.links?.length && (
            <div style={linksStyle}>
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href === "#" ? undefined : "_blank"}
                  rel={l.href === "#" ? undefined : "noreferrer"}
                  style={linkStyle}
                  onClick={(e) => {
                    if (l.href === "#") e.preventDefault();
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
