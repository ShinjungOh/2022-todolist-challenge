import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@ui/core/GlobalStyles';

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
    <Component {...pageProps} />
  </>
);

export default MyApp;
