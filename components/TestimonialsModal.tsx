// components/TestimonialsModalContent.tsx
import React from "react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text:
      "Servicio 10/10! Bárbara me brindó asesoría personalizada en la metodología y análisis de datos para mi proyecto de posgrado. Se ajustó a mis horarios y entendí cada proceso hasta los resultados, recomendada!!",
    name: "José P",
    role: "Estudiante de posgrado",
  },
  {
    text:
      "Bárbara me ayudo mucho en la estadística, redacción y estructura de mi proyecto, me explico paso a paso como se debe realizar y si no entendía algo lo volvía a explicar hasta entenderlo, logró comprometerse y ajustarse a los horarios que  de entrega y a gustos de investigador. Me encantó su pedagogía y conocimientos al momento de realizar el proyecto 100% recomendada.",
    name: "Patricio L",
    role: "Estudiante de posgrado",
  },
  {
    text:
      "Bárbara me brindó un excelente acompañamiento en el análisis de los datos y números que tenía para el manejo y crecimiento de mi empresa, resultados claros y muy profesionales… 100% recomendada.",
    name: "Jessica V",
    role: "Empresaria",
  },
  {
    text:
      "Muy profesional, me ayudó a construir una aplicación de análisis de datos para mi empresa,con base de datos de mis clientes. Me ahorró mucho tiempo en mis actividades diarias por un precio muy accesible. Gracias!",
    name: "Gabriela M",
    role: "Emprendedora",
  },
];

const wrapStyle: React.CSSProperties = {
  display: "grid",
  gap: 12,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  borderRadius: 16,
  padding: 14,
};

const quoteStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.5,
  opacity: 0.92,
};

const footerStyle: React.CSSProperties = {
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  opacity: 0.9,
};

export default function TestimonialsModalContent() {
  return (
    <section style={wrapStyle} aria-label="Testimonials">
      <header>
        <h3 style={{ margin: 0, fontSize: 24,fontWeight:700, color:"#ff4500",}}>Testimonios</h3>
        <p style={{ margin: "6px 0 0 0", opacity: 0.85, fontSize: 18 }}>
          Te dejo aquí las opiniones de algunas de las personas que he asesorado.
        </p>
      </header>

      {testimonials.map((t, idx) => (
        <article key={idx} style={cardStyle}>
          <p style={quoteStyle}>“{t.text}”</p>
          <div style={footerStyle}>
            <strong>{t.name}</strong>
            <span style={{ fontSize: 13, opacity: 0.85, color:"#ffd700"}}>{t.role}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
