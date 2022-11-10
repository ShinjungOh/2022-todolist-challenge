import React from 'react';
import styled from 'styled-components';

const Signin = () => (
  <Container>
    <Title>로그인</Title>
    <InputContainer>
      <Label htmlFor="email">아이디</Label>
      <Input type="email" id="email" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" />
    </InputContainer>
    <SignInButton>로그인</SignInButton>
    <SignUpButton>회원가입</SignUpButton>
  </Container>
);

export default Signin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 60px;
`;

const Label = styled.label`
  padding-left: 3px;
  font-size: 15px;
  font-weight: normal;
  color: #363636;
`;

const InputContainer = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 300px;
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  padding-left: 10px;
  margin-top: 2px;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 13px;
`;

const SignInButton = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  background-color: #ffe782;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  margin-top: 20px;
  border: none;
  background-color: white;
  color: blue;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;
