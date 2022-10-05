import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from '@ui/core/GlobalStyle';
import { Page } from '@ui/components/layout';

import { TodoStoreProvider } from '../lib/store/stores';

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>투두 리스트</title>
    </Head>
    <GlobalStyle />
    <TodoStoreProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </TodoStoreProvider>
  </>
);

export default MyApp;
