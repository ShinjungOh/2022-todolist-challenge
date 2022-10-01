import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from '@ui/core/GlobalStyle';

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>투두 리스트</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
