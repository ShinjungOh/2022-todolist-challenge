import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const TodoHeader = ({ title }: Props) => (
  <Container>
    <Title>
      {title}
    </Title>
  </Container>

);

export default TodoHeader;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: content-box;
  height: 130px;
`;

const Title = styled.h3`
  font-size: 30px;
`;
