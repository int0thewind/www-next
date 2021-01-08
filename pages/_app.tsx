/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Footer, Nav } from '../component';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
