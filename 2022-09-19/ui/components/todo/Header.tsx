import React from 'react';
import styled from 'styled-components';

const TodoHeader = () => (
  <Container>
    <DayContainer>
      <Today>2022.09.19</Today>
      <DayName>월요일</DayName>
    </DayContainer>
    <UnDoneTodoLength>남은 할 일 0개</UnDoneTodoLength>
  </Container>
);

export default TodoHeader;

const Container = styled.div`
  width: 100%;
  height: 25%;
  background-color: #f5cf0d;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b79a12;
  padding: 10px 15px 10px 15px;
`;

const Today = styled.div`
  height: 25%;
  font-size: 20px;
`;

const DayName = styled.div`
  font-size: 15px;
`;

const UnDoneTodoLength = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
