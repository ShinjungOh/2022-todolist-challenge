import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <>
    <DateContainer>
      <Title>날짜</Title>
      <DayName>요일</DayName>
    </DateContainer>
    <TodoContainer>
      <TodoCount>할일 0개 남음</TodoCount>
    </TodoContainer>
  </>
);

export default Header;

const DateContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px 15px 40px;
  background-color: #96b397;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
`;

const DayName = styled.div`
  font-size: 15px;
`;

const TodoContainer = styled.div`
  background-color: #c7e5c8;
  width: 100%;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0px 40px 10px 40px;
  border-bottom: 1px solid #eaeaea;
`;

const TodoCount = styled.div`
  margin-top: 15px;
  font-size: 20px;
`;
