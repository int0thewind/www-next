/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer, Header } from '../component';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hanzhi Yin</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
