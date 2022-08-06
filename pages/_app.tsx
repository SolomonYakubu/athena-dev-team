import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import
          url(&quot;https://fonts.googleapis.com/css2?family=Orbitron&family=Poppins&display=swap)
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
