import styled from 'styled-components';
import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';

const Home: NextPage = () => (
  <Container>
    <Title>투두리스트</Title>
    <Button>
      <Link href="auth/signin">
        <a>로그인</a>
      </Link>
    </Button>
    <Button>
      <Link href="auth/signup">
        <a>회원가입</a>
      </Link>
    </Button>
  </Container>
);

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  margin-top: -50px;
`;

const Button = styled.button`
  width: 290px;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  background-color: lightblue;
  font-size: 17px;
  cursor: pointer;
`;
