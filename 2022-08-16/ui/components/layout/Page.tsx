import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const Page = ({ children }: Props) => (
  <Container>
    {children}
  </Container>
);

export default Page;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;
