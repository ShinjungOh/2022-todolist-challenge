import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

const Home: NextPage = () => (
  <Container>
    <h1>Todolist</h1>
    <Button>
      <Link href="/auth/signin">
        <a>로그인</a>
      </Link>
    </Button>
    <Button>
      <Link href="/auth/signup">
        <a>회원가입</a>
      </Link>
    </Button>
  </Container>
);

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 25%
`;

const Button = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 15px;
  background-color: #ffe782;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
`;
