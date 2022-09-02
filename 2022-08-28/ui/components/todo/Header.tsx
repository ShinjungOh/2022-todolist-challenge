import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const today = new Date();
  const title = today.toLocaleString('ko-kr', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  const dayName = today.toLocaleString('ko-kr', {
    weekday: 'long',
  });

  return (
    <Container>
      <DayContainer>
        <Title>{title}</Title>
        <DayName>{dayName}</DayName>
      </DayContainer>
      <UnDoneTaskLength>남은 할 일 0개</UnDoneTaskLength>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 25%;
  background-color: #baddf9;
  display: flex;
  flex-direction: column;
`;

const DayContainer = styled.div`
  height: 30%;
  background-color: #89abc6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0 20px 0 20px;
  color: #3f3f3f;
`;

const DayName = styled.text`
  margin: 0 20px 0 20px;
  color: #3f3f3f;
`;

const UnDoneTaskLength = styled.div`
  color: #3f3f3f;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 25%;
`;
