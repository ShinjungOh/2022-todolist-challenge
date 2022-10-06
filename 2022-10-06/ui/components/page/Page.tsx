import React from 'react';
import styled from 'styled-components';

import { Layout } from '@components/page/index';

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => (
  <Container>
    <Layout>
      {children}
    </Layout>
  </Container>
);

export default Page;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
`;
