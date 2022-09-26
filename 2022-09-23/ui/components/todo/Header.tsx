import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const today = new Date();
  const date = today.toLocaleDateString('ko-kr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-kr', {
    weekday: 'long',
  });

  return (
    <Container>
      <DayContainer>
        <Today>{date}</Today>
        <DayName>{dayName}</DayName>
      </DayContainer>
      <UndoneTodoLength>할 일이 0개 남았습니다.</UndoneTodoLength>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 28%;
  border-bottom: 1.5px solid #eaeaea;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px;
`;

const Today = styled.div`
  font-size: 25px;
  color: #3d3c3c;
`;

const DayName = styled.div`
  font-size: 20px;
  color: #a6a5a5;
`;

const UndoneTodoLength = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #4b4b4b;
`;
