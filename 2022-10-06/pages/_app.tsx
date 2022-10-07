import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@ui/core/GlobalStyles';
import { Page } from '@ui/components/page';

import { TodoStoreProvider } from '../lib/store/stores';

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
    <TodoStoreProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </TodoStoreProvider>
  </>
);

export default MyApp;
