import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@ui/core/GlobalStyles';
import { Page } from '@ui/components/page';

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>
        투두 리스트
      </title>
    </Head>
    <GlobalStyles />
    <Page>
      <Component {...pageProps} />
    </Page>
  </>
);

export default MyApp;
