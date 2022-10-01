import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <DayContainer>
      <Today>2022.10.01</Today>
      <DayName>Sat.</DayName>
    </DayContainer>
    <UndoneTaskLength>할 일이 0개 남았습니다.</UndoneTaskLength>
  </Container>
);

export default Header;

const Container = styled.div`
  width: 100%;
  height: 25%;
  border-bottom: 0.5px solid #cecece;
  background: rgb(255, 204, 128);
  background: linear-gradient(21deg, rgba(255, 204, 128, 1) 0%, rgba(255, 255, 176, 1) 100%);
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Today = styled.div`
  font-size: 25px;
`;

const DayName = styled.div`
  font-size: 18px;
  color: gray;
`;

const UndoneTaskLength = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
