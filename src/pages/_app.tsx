import '@/assets/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

type AppPropsWithExtra = AppProps & {
  pageProps: AppProps['pageProps'] & { isMobile?: boolean };
};

export default function App({ Component, pageProps }: AppPropsWithExtra) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
