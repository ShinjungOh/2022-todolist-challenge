import React from 'react';
import styled from 'styled-components';

const Signup = () => (
  <Container>
    <Title>회원가입</Title>
    <InputContainer>
      <Label htmlFor="id">아이디를 입력하세요.</Label>
      <Input type="text" id="id" placeholder="이메일 형식으로 입력" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="password">비밀번호를 입력하세요.</Label>
      <Input type="text" id="password" />
    </InputContainer>
    <InputContainer>
      <Label htmlFor="password-check">비밀번호 확인</Label>
      <Input type="text" id="password-check" />
    </InputContainer>
    <Check>
      <InputBox type="checkbox" />
      [필수] 개인정보 수집 및 이용 동의
    </Check>
    <SigninButton>회원가입</SigninButton>
    <SignupButton>이미 가입이 되어있다면? 로그인</SignupButton>
  </Container>
);

export default Signup;

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

const Check = styled.div`
  width: 290px;
  color: #494949;
  margin: 10px 0;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
`;

const InputBox = styled.input`
  width: 15px;
  height: 15px;
  color: #494949;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 7px;
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
  color: #494949;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
