import React, { memo, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';

import { useTodoStores } from '../../lib/store/stores';

const Signin = () => {
  const router = useRouter();
  const { userStore } = useTodoStores();

  const onChangeInput = (e: { target: { name: any; value: any; }; }) => {
    const {
      name,
      value,
    } = e.target;
    userStore.onChangeSignIn(name, value);
  };

  const onClickSignIn = useCallback(async () => {
    const isSignIn = await userStore.signinUser();
    if (isSignIn) {
      router.push('/todolist');
    }
  }, [userStore.signIn.email, userStore.signIn.password]);

  useEffect(() => {
    userStore.clearSignInUser();
  }, []);

  return (
    <Container>
      <Title>TodoList</Title>
      <InputContainer>
        <Label htmlFor="id">아이디를 입력하세요.</Label>
        <Input
          type="email"
          id="id"
          name="email"
          onChange={onChangeInput}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">비밀번호를 입력하세요.</Label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={onChangeInput}
        />
      </InputContainer>
      <SigninButton onClick={onClickSignIn}>로그인</SigninButton>
      <SignupButton>
        <Link href="/auth/signup">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>회원가입</a>
        </Link>
      </SignupButton>
    </Container>
  );
};

export default memo(observer(Signin));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 300px;
  height: 30px;
  margin-top: 70px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
`;

const InputContainer = styled.div`
  width: 290px;
  height: 100px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Label = styled.label`
  padding-bottom: 5px;
  padding-left: 5px;
  font-size: 15px;
  color: grey;
`;

const Input = styled.input`
  width: 290px;
  height: 45px;
  padding: 5px 15px;
  border-radius: 5px;
  border: 0.5px solid grey;
  font-size: 15px;
  cursor: pointer;
`;

const SigninButton = styled.button`
  width: 290px;
  height: 45px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: lightblue;
  font-size: 17px;
  cursor: pointer;
`;

const SignupButton = styled.div`
  margin-top: 30px;
  font-size: 15px;
  color: #5353e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
