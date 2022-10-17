import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <Container>
    {children}
  </Container>
);

export default Layout;

const Container = styled.div`
  background-color: white;
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  max-height: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
