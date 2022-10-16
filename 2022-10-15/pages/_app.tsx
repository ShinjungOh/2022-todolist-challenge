import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from '@ui/core/GlobalStyles';

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>투두리스트</title>
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
