import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@ui/core/GlobalStyle';
import { Page } from '@ui/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>투두 리스트</title>
      </Head>
      <GlobalStyles />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
