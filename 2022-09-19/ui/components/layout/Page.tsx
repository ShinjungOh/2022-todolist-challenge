import React from 'react';
import styled from 'styled-components';

import { Layout } from '@components/layout/index';

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
  position: absolute;
  background-color: #f1f1f1;
`;
