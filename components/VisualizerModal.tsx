// components/VisualizerModalContent.tsx
import React from "react";

type VisualItem = {
  title: string;
  kind: "image" | "video";
  src: string; // placeholder path
  note?: string;
};

const items: VisualItem[] = [
  {
    title: "Interpretación Chi Cuadrado",
    kind: "image",
    src: "/visualizer/shot-3.jpg",
    note: "Tabla cruzada y Prueba Chi cuadrado para independencia entre variables categóricas.",
  },
  {
    title: "Análisis estadístico Datos de Panel",
    kind: "image",
    src: "/visualizer/shot-2.jpg",
    note: "Modelo de efectos fijos y aleatorios para datos de panel, previo análisis de correlaciones.",
  },
  {
    title: "Comparación de trayectorias y tiempos",
    kind: "video",
    src: "/visualizer/demo-1.mp4",
    note: "Simulación física con parámetros reales, usando cálculo variacional. Se usó Newton-Raphson para construir la trayectoria de la cicloide.",
  },
  {
    title: "Movimiento planetario",
    kind: "video",
    src: "/visualizer/demo-2.mp4",
    note: "Simulación de órbitas elípticas usando leyes de Kepler y conservación del momento angular.",
  },
  {
    title: "Péndulo doble",
    kind: "video",
    src: "/visualizer/demo-3.mp4",
    note: "Simulación caótica de un péndulo doble usando integración numérica de las ecuaciones de movimiento.",
  },
];

const wrapStyle: React.CSSProperties = {
  display: "grid",
  gap: 12,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 420px))",
  gap: 30,
  alignContent: "center",
  alignItems: "center",
  margin:"auto",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  borderRadius: 16,
  padding: 12,
};

const thumbStyle: React.CSSProperties = {
  width: "100%",
  height: 280,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.18)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const titleStyle: React.CSSProperties = {
  margin: "10px 0 0 0",
  fontSize: 16,
  fontWeight: 700,
  
};

const noteStyle: React.CSSProperties = {
  margin: "6px 0 0 0",
  opacity: 0.85,
  fontSize: 13,
  lineHeight: 1.35,
  color: "#00ffff",
};

export default function VisualizerModalContent() {
  return (
    <section style={wrapStyle} aria-label="Visualizer">
      <header>
        <h3 style={{ margin: 0, fontSize: 24,fontWeight:700,color:"#ff4500", }}>Visualizer</h3>
        <p style={{ margin: "6px 0 0 0", opacity: 0.85 }}>
          Capturas y GIFs de los productos finales entregados para clientes.  
        </p>
        <p style={{ margin: "6px 0 0 0", opacity: 0.75, fontSize: 13 }}>
          No son los originales, han sido editados por confidencialidad
        </p>
      </header>

      <div style={gridStyle}>
        {items.map((it) => (
          <article key={it.title} style={cardStyle}>
            <div style={thumbStyle}>
              {/* Si no existe el archivo, igual el layout se mantiene */}
              {it.kind === "video" ? (
                <video
                  src={it.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent && !parent.querySelector("[data-fallback='1']")) {
                      const fallback = document.createElement("div");
                      fallback.setAttribute("data-fallback", "1");
                      fallback.style.padding = "12px";
                      fallback.style.textAlign = "center";
                      fallback.style.opacity = "0.85";
                      fallback.style.fontSize = "13px";
                      fallback.innerText =
                        "Video placeholder no encontrado.\nAgrega el archivo en /public o cambia el src.";
                      parent.appendChild(fallback);
                    }
                  }}
                />
              ) : (
                <img
                  src={it.src}
                  alt={it.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}

            </div>
            <h4 style={titleStyle}>{it.title}</h4>
            {it.note ? <p style={noteStyle}>{it.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
