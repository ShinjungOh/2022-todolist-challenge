import React from 'react';
import styled from 'styled-components';

const TodoCreate = () => (
  <>
    <TodoContainer>
      <InputForm>
        <Input placeholder="enter를 눌러 입력하세요." autoFocus />
      </InputForm>
    </TodoContainer>
    <Button>추가</Button>
  </>
);

export default TodoCreate;

const TodoContainer = styled.div`
  width: 100%;
  height: 30%;
  border-top: 1.5px solid #eaeaea;
  background-color: #eaeaea;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputForm = styled.form`
  width: 90%;
  height: 30%;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 95%;
  height: 90%;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #6289ff;
  color: white;
  position: absolute;
  right: 10%;
  bottom: 4%;
  cursor: pointer;
  font-size: 20px;
`;
