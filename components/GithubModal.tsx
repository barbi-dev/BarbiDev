import styles from "../styles/landing.module.css";
export default function GithubModalContent() {
  const githubUrl = "https://github.com/barbi-dev";

  const repos = [
    {
      name: "Dashboard Interactivo Bolsa de Valores Ecuador",
      desc: "Dashboard interactivo de Acciones de la Bolsa de Valores de Ecuador construido con Streamlit y datos públicos desde Hugging Face Hub. Permite a los usuarios explorar y visualizar datos financieros de manera intuitiva.",
      tags: ["Python", "Streamlit", "Pandas", "Hugging Face"],
      url: "https://github.com/dashboard-bolsa-ecuador",
    },
    {
      name: "Simulación Péndulo Doble con integración numérica",
      desc: "Simulación de fenómeno físico en Python usando el método de Runge Kutta 4. Animación en tiempo real con Matplotlib.",
      tags: ["Python", "NumPy", "Matplotlib","RK4"],
      url: "https://github.com/barbi-dev/simulation_double_pendulum",
    },
    {
      name: "Simulación interactiva: el problema de la braquistócrona",
      desc: "Simulación interactiva del problema de la braquistócrona utilizando Python Streamlit y Matplotlib. Permite a los usuarios visualizar y comprender el concepto de la curva de descenso más rápido entre dos puntos bajo la influencia de la gravedad.",
      tags: ["Python","Physics", "Streamlit"],
      url: "https://github.com/barbi-dev/application_physics_brachistochrone",
    },
  ];

  return (
    <div>
      <div className={styles.modalHead}>
        <h3 className={styles.modalTitle}>GitHub</h3>
        <p className={styles.modalSub}>
          Te dejo aquí un resumen de mis repositorios más destacados, estos los podrás encontrar en mi Github (código y demos).
        </p>

        <a
          className={styles.modalCta}
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Ver perfil en GitHub →
        </a>
      </div>

      <div className={styles.repoGrid}>
        {repos.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className={styles.repoCard}
          >
            <div className={styles.repoTop}>
              <div className={styles.repoName}>{r.name}</div>
              <div className={styles.repoChip}>Repo</div>
            </div>

            <div className={styles.repoDesc}>{r.desc}</div>

            <div className={styles.repoTags}>
              {r.tags.map((t) => (
                <span key={t} className={styles.repoTag}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
