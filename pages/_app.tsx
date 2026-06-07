import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import DisclaimerBanner from '../components/DisclaimerBanner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="CineBox — Portfolio demo project. Not a real streaming service." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <DisclaimerBanner />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;