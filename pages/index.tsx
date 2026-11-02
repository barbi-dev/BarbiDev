import Head from "next/head";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>BarbiDev | Clases de física, estadística y programación</title>
        <meta
          name="description"
          content="Clases de física universitaria online por Zoom en español. Asesoría en estadística y programación para tesis y proyectos. Ecuador. Cotiza por WhatsApp."
        />
        <meta property="og:title" content="Clases de física, estadística y programación | BarbiDev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbidev.com/" />
        <meta
          property="og:description"
          content="Clases de física universitaria online en español y asesoría en estadística y programación desde Ecuador. Cotiza por WhatsApp."
        />
        <meta property="og:image" content="https://barbidev.com/ogbd.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BarbiDev | Clases de física, estadística y programación" />
        <meta
          name="twitter:description"
          content="Clases de física universitaria por Zoom en español. Estadística y programación para tesis y proyectos."
        />
        <meta name="twitter:image" content="https://barbidev.com/ogbd.jpg" />

      </Head>

      <Landing />
    </>
  );
}
