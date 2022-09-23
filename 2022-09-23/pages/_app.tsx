import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@ui/core/GlobalStyle';

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>투두 리스트</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
