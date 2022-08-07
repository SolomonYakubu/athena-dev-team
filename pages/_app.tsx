import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Athenasoft Technology</title>
        <style>
          @import
          url(&quot;https://fonts.googleapis.com/css2?family=Orbitron&family=Poppins&display=swap)
        </style>
        <meta property="og:title" content="Athenasoft Technology" />

        <meta name="author" content="Solomon Yakubu" />
        <meta
          property="og:description"
          content="Athenasoft Technology help African businesses in developing and launching online, mobile application, and software projects more quickly and affordably.

"
        />
        <meta property="og:url" content="https://athenasoftechnology.com.ng/" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
