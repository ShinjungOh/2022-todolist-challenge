import React from 'react';
import styled from 'styled-components';

import { Page } from '@components/layout';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <Page>
    <Container>
      {children}
    </Container>
  </Page>
);

export default Layout;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 420px;
  max-height: 960px;
  height: 100vh;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
