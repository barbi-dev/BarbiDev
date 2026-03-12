import Head from "next/head";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>BarbiDev | Estadística & Programación para tesis y proyectos</title>
        <meta
          name="description"
          content="Asesoría en análisis estadístico y proyectos de programación para tesis, artículos e investigaciones en Ecuador. "
        />
        <meta property="og:title" content="BarbiDev | Estadística & Programación" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbi-dev.vercel.app" />
        <meta
          property="og:description"
          content="Asesoría para tesis e investigaciones. Análisis estadístico, Programación en Python y más."
        />
        <meta property="og:image" content="https://barbi-dev.vercel.app/ogbd.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BarbiDev | Estadística & Programación" />
        <meta
          name="twitter:description"
          content="Asesoría para tesis e investigaciones. Análisis estadístico, Programación en Python y más."
        />
        <meta name="twitter:image" content="https://barbi-dev.vercel.app/ogbd.jpg" />

      </Head>

      <Landing />
    </>
  );
}
