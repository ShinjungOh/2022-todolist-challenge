import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from '@ui/core/GlobalStyle';
import { Page } from '@ui/components/layout';

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>투두 리스트</title>
    </Head>
    <GlobalStyle />
    <Page>
      <Component {...pageProps} />
    </Page>
  </>
);

export default MyApp;
