import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from '@ui/core/GlobalStyles';
import { Page } from '@components/layout';

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>투두리스트</title>
    </Head>
    <GlobalStyles />
    <Page>
      <Component {...pageProps} />
    </Page>
  </>
);

export default MyApp;
