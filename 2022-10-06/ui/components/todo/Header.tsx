import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {
  undoneTodoLength: number;
}

const Header = ({ undoneTodoLength }: Props) => {
  const today = new Date();

  const day = today.toLocaleString('ko-kr', {
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
        <Today>{day}</Today>
        <DayName>{dayName}</DayName>
      </DayContainer>
      <UnDoneTodoLength>할 일이 {undoneTodoLength}개 남았습니다.</UnDoneTodoLength>
    </Container>
  );
};

export default memo(Header);

const Container = styled.div`
  width: 100%;
  height: 25%;
  background-color: lightblue;
`;

const DayContainer = styled.div`
  width: 100%;
  height: 30%;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Today = styled.div`
  font-size: 28px;
`;

const DayName = styled.div`
  font-size: 18px;
`;

const UnDoneTodoLength = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20%;
`;
