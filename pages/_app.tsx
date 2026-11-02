import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <link rel="canonical" href={`https://barbidev.com${pathname === "/" ? "/" : pathname}`} key="canonical" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

