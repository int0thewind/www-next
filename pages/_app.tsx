/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Footer, Header } from '../component';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
