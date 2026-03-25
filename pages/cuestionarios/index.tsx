export default function CuestionariosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07010f",
        color: "white",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "16px" }}>
          Cuestionarios Interactivos
        </h1>

        <p style={{ color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>
          Recursos de práctica y evaluación interactiva para estudiantes en
          matemática, razonamiento y preparación académica.
        </p>

        <div
          style={{
            border: "1px solid rgba(255,0,255,0.22)",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.04)",
            padding: "24px",
            maxWidth: "700px",
          }}
        >
          <h2 style={{ fontSize: "1.7rem", marginBottom: "12px" }}>
            Cuestionario interactivo
          </h2>

          <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
            Accede al primer cuestionario interactivo desarrollado para práctica,
            diagnóstico y seguimiento del estudiante.
          </p>

          <a
            href="https://quiz.barbidev.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "18px",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "14px",
              border: "1px solid rgba(0,255,255,0.35)",
              color: "#00ffff",
            }}
          >
            Abrir cuestionario
          </a>
        </div>
      </div>
    </main>
  );
}