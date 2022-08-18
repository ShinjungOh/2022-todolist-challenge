import React from 'react';
import styled from 'styled-components';

interface Props {
  dateString: string;
  dayName: string;
  undoneTaskLength: number;
}

const TodoHeader = ({
  dateString,
  dayName,
  undoneTaskLength,
}: Props) => (
  <Container>
    <Title>{dateString}</Title>
    <Description>{dayName}</Description>
    <UnDoneTask>할 일 {undoneTaskLength}개 남음</UnDoneTask>
  </Container>
);

export default TodoHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 42px 24px 24px 24px;
  box-sizing: content-box;
  height: 130px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #252424CE;
  margin: 0;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 20px;
  color: #6e6a6a;
  margin-top: 5px;
`;

const UnDoneTask = styled.div`
  font-size: 18px;
  margin-top: 32px;
  color: #3a68f9;
  font-weight: bold;
`;
