import Head from "next/head";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>BarbiDev | Estadística & Python para tesis y proyectos</title>
        <meta
          name="description"
          content="Asesoría experta en análisis estadístico y proyectos Python para tesis, artículos e investigaciones. Guía real para entender, justificar y defender resultados."
        />
        <meta property="og:title" content="BarbiDev | Estadística & Python" />
        <meta
          property="og:description"
          content="Asesoría experta para tesis e investigaciones. No hago tu tesis por ti: te enseño, te guío y te preparo para defender."
        />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <Landing />
    </>
  );
}
