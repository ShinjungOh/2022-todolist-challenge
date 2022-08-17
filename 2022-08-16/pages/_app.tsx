import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@ui/core/GlobalStyle';
import { Layout } from '@components/layout';

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
