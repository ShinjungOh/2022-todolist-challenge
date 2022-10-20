import React from 'react';
import styled from 'styled-components';

import userStore from '../../../lib/store/userStore';

interface Props {
  unDoneTodoLength: number;
}

const Header = ({ unDoneTodoLength }: Props) => {
  const today = new Date();
  const date = today.toLocaleString('ko-kr', {
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
        <Today>{date}</Today>
        <DayName>{dayName}</DayName>
      </DayContainer>
      {userStore.signIn.email}
      <UndoneTodoLength>할 일 {unDoneTodoLength}개 남음</UndoneTodoLength>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 25%;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DayContainer = styled.div`
  width: 100%;
  height: 28%;
  position: absolute;
  top: 0;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
`;

const Today = styled.div`
  font-size: 20px;
  font-weight: 520;
`;

const DayName = styled.div`
  font-size: 15px;
  color: grey;
`;

const UndoneTodoLength = styled.div`
  position: absolute;
  top: 65%;
  font-size: 23px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
