import React from 'react';
import styled from 'styled-components';

const Signup = () => (
  <Container>
    <Title>회원가입</Title>
    <InputContainer>
      <Label htmlFor="email">아이디를 입력하세요.</Label>
      <Input
        type="email"
        id="email"
        placeholder="이메일 형식으로 입력해 주세요."
      />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="password">비밀번호를 입력하세요.</Label>
      <Input
        type="password"
        id="password"
      />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="password-check">비밀번호를 확인해 주세요.</Label>
      <Input
        type="password"
        id="password-check"
      />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="name">이름을 입력하세요.</Label>
      <Input
        type="text"
        id="name"
      />
    </InputContainer>
    <Check>
      <CheckBox type="checkbox" />
      [필수] 개인정보 수집 및 이용 동의
    </Check>
    <SignUpButton>회원가입</SignUpButton>
    <SignInButton>로그인</SignInButton>
  </Container>
);

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 60px;
`;

const InputContainer = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 300px;
`;

const Label = styled.label`
  padding-left: 3px;
  font-size: 15px;
  font-weight: normal;
  color: #363636;
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

const Check = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  cursor: pointer;
  width: 300px;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

const SignUpButton = styled.button`
  width:  300px;
  height: 50px;
  margin-top: 20px;
  background-color: #ffe782;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const SignInButton = styled.button`
  margin-top: 20px;
  border: none;
  background-color: white;
  color: blue;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;
