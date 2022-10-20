import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from '@ui/core/GlobalStyles';
import { Page } from '@components/layout';

import { TodoStoreProvider } from '../lib/store/stores';

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>투두리스트</title>
    </Head>
    <GlobalStyles />
    <TodoStoreProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </TodoStoreProvider>
  </>
);

export default MyApp;
