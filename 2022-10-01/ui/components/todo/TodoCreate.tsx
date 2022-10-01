import React from 'react';
import styled from 'styled-components';

const TodoCreate = () => (
  <>
    <TodoContainer>
      <InputForm>
        <Input placeholder="enter를 눌러 제출" autoFocus />
      </InputForm>
    </TodoContainer>
    <Button>추가</Button>
  </>
);

export default TodoCreate;

const TodoContainer = styled.div`
  width: 100%;
  height: 28%;
  background-color: #e5e5e5;
  border-top: 0.5px solid #cecece;
  position: absolute;
  bottom: 0;
`;

const InputForm = styled.form`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 8%;
`;

const Input = styled.input`
  width: 90%;
  height: 30%;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #FFCC80;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  position: absolute;
  bottom: 4%;
  right: 5%;
  cursor: pointer;
  z-index: 2;
`;
