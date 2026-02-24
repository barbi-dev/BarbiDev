import Head from "next/head";
import SocialIcons from "../components/SocialIcons";

type SimItem = {
  slug: string;
  title: string;
  subtitle: string;
  href: string;      
  preview: string; 
  previewHover?: string;  
  tags: string[];
  status?: "new" | "stable";
};

const SIMS: SimItem[] = [
  {
    slug: "BrownianMotion",
    title: "Movimiento browniano 2D",
    subtitle: "Traza acumulativa de partícula fluorescente",
    href: "/BrownianMotion/index.html",
    preview: "/visualizer/BrownianMotion.png",
    previewHover: "/visualizer/BrownianMotionTail.gif",
    tags: ["Ciencia con Huella","Física", "Estocástico"],

  },
  {
    slug: "DoublePendulum",
    title: "Péndulo Doble",
    subtitle: "Divergencia en trayectorias de dos péndulos",
    href: "/DoublePendulum/index.html",
    preview: "/visualizer/double_pendulum.png",  
    previewHover: "/visualizer/two_pendulum_.gif",
    tags: ["Caos", "Física", "Simulación"],
    status: "new",
  },
  // En el futuro: solo agregas aquí más simulaciones
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>BarbiDev | Projects</title>
        <meta
          name="description"
          content="Simulaciones y apps interactivas de física, matemáticas y programación. Estilo cyberpunk con trazas y movimiento."
        />
      </Head>

      <main className="page">
        <div className="bg" />

        <section className="wrap">
          <header className="top">
            <div>
              <div className="kicker">BARBIDEV · HANDS ON</div>
              <h1 className="title">Proyectos</h1>
              <p className="sub">
                Apps interactivas de física, mate y programación. Estilo cyberpunk con trazas y movimiento.
              </p>
            </div>

            <div className="actions">
              <a className="btn" href="/#top">Volver a la landing</a>
              <a className="btn" href="https://github.com/barbi-dev" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </header>

          <div className="grid">
            {SIMS.map((s) => (
                <a
                    key={s.slug}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cardLink"
                    aria-label={`Abrir simulación ${s.title}`}
                >
                    <article className="card">
                    <div className="thumb">
                        {/* Base PNG */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="thumbBase" src={s.preview} alt={s.title} />

                        {/* Hover GIF */}
                        {s.previewHover && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            className="thumbHover"
                            src={s.previewHover}
                            alt={`${s.title} preview`}
                        />
                        )}

                        {s.status && (
                        <span className={`badge ${s.status}`}>
                            {s.status === "new" ? "NEW" : "STABLE"}
                        </span>
                        )}
                    </div>

                    <div className="body">
                        <h2 className="cardTitle">{s.title}</h2>
                        <p className="cardSub">{s.subtitle}</p>

                        <div className="tags">
                        {s.tags.map((t) => (
                            <span className="tag" key={t}>{t}</span>
                        ))}
                        </div>
                    </div>
                    </article>
                </a>
                ))}

          </div>
        </section>

        <section className="section1">
          <SocialIcons />
        </section>

        <footer className="footer">
        <span>© BarbiDev · Estadística & Python · Ecuador / Online</span>
        </footer>

        <style jsx>{`
          .page { min-height: 100vh; }
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
            padding: 30px 40px 60px;
          }
          .section1{
            padding:54px 0 0; }
          .top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 18px;
            margin-bottom: 18px;
          }
          .kicker {
            font-size: 12px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.62);
          }
          .title {
            margin: 8px 0 6px;
            font-size: 36px;
            line-height: 1.08;
            color: rgba(255,255,255,0.95);
          }
          .footer{
            padding:18px 16px 28px;
            text-align:center;
            opacity:.65;
            border-top:1px solid rgba(255,255,255,.08);
          }

          .sub {
            margin: 0;
            max-width: 640px;
            color: rgba(255,255,255,0.70);
          }
          .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 12px;
          }
            .cardLink {
            text-decoration: none;
            color: inherit;
            display: block;
            }

            .card {
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.10);
            background: rgba(255,255,255,0.03);
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 12px 40px rgba(0,0,0,0.45);
            transition: transform 180ms ease, border-color 180ms ease;
            }

            /* feedback visual claro */
            .card:hover {
            transform: translateY(-2px);
            border-color: rgba(0,255,255,0.22);
            box-shadow: 0 14px 55px rgba(0,0,0,0.55);
            }

            /* accesibilidad: foco con teclado */
            .cardLink:focus-visible .card {
            outline: 2px solid rgba(0,255,255,0.45);
            outline-offset: 4px;
            }

          .thumb {
            position: relative;
            aspect-ratio: 16 / 10;
            background: rgba(0,0,0,0.25);
            overflow: hidden;
            }

            /* Base PNG */
            .thumbBase {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transform: scale(1.00);
            transition: transform 220ms ease;
            }

            /* GIF overlay */
            .thumbHover {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            opacity: 0;
            transform: scale(1.02);
            transition: opacity 180ms ease, transform 220ms ease;
            will-change: opacity, transform;
            }

            /* Neon shine overlay */
            .thumb::after {
            content: "";
            position: absolute;
            inset: -40%;
            background: linear-gradient(
                120deg,
                transparent 35%,
                rgba(0,255,255,0.20) 48%,
                rgba(255,0,255,0.16) 52%,
                transparent 65%
            );
            transform: translateX(-60%) rotate(10deg);
            opacity: 0;
            pointer-events: none;
            }

            /* Hover effects */
            .card:hover .thumbBase {
            transform: scale(1.02);
            }

            .card:hover .thumbHover {
            opacity: 1;
            transform: scale(1.00);
            }

            /* run shine animation on hover */
            .card:hover .thumb::after {
            opacity: 1;
            animation: neonShine 900ms ease-out forwards;
            }

            @keyframes neonShine {
            0%   { transform: translateX(-60%) rotate(10deg); opacity: 0; }
            15%  { opacity: 1; }
            100% { transform: translateX(60%) rotate(10deg); opacity: 0; }
            }


          .badge {
            position: absolute;
            top: 12px;
            left: 12px;
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            letter-spacing: 0.12em;
            font-weight: 800;
            border: 1px solid rgba(255,255,255,0.12);
            backdrop-filter: blur(10px);
          }
          .badge.new {
            color: rgba(0,255,255,0.95);
            background: rgba(0,255,255,0.08);
            border-color: rgba(0,255,255,0.25);
          }
          .badge.stable {
            color: rgba(255,0,255,0.95);
            background: rgba(255,0,255,0.08);
            border-color: rgba(255,0,255,0.25);
          }

          .body { padding: 14px 14px 6px; }
          .cardTitle {
            margin: 0 0 6px;
            font-size: 18px;
            color: rgba(255,255,255,0.92);
          }
          .cardSub {
            margin: 0;
            font-size: 14px;
            color: rgba(255,255,255,0.68);
          }

          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 12px 0 12px;
          }
          .tag {
            font-size: 12px;
            color: rgba(255,255,255,0.72);
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.10);
            background: rgba(0,0,0,0.18);
          }

          .cardActions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 3px 16px;
            border-radius: 12px;
            border: 1.5px solid rgba(0,255,255,0.50);
            background: rgba(255,255,255,0.02);
            color: rgba(255, 0, 255, 0.9);
            text-decoration: none;
          }
          .btn:hover { border-color: rgba(255, 0, 255, 0.4); }
          .btn.primary {
            border-color: rgba(255, 69, 0, 0.75);
            background: rgba(0,255,255,0.08);
          }
          .btn.ghost { background: rgba(0,0,0,0.10); }


          @media (max-width: 1100px) {
            .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }
          @media (max-width: 760px) {
            .top { flex-direction: column; }
            .grid { grid-template-columns: 1fr; }
            .wrap {padding: 20px 12px 20px;
          }
          }
        `}</style>
      </main>
    </>
  );
}
