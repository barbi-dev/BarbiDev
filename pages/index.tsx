import Head from "next/head";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>BarbiDev | Física universitaria y Python online</title>
        <meta
          name="description"
          content="Clases de física universitaria, Python y métodos numéricos online. Aprende en español por Zoom desde Ecuador. Cotiza tu clase por WhatsApp."
        />
        <meta property="og:title" content="Física universitaria y Python online | BarbiDev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbidev.com/" />
        <meta
          property="og:description"
          content="Entiende la física. Piensa en Python. Clases universitarias en español por Zoom desde Ecuador."
        />
        <meta property="og:image" content="https://barbidev.com/ogbd.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BarbiDev | Física universitaria y Python online" />
        <meta
          name="twitter:description"
          content="Física, Python y métodos numéricos para universitarios. Clases en español por Zoom desde Ecuador."
        />
        <meta name="twitter:image" content="https://barbidev.com/ogbd.jpg" />

      </Head>

      <Landing />
    </>
  );
}
