import React from 'react';
import styled from 'styled-components';

const TodoCreate = () => (
  <Container>
    <InputContainer>
      <Input />
    </InputContainer>
    <Button>추가</Button>
  </Container>
);

export default TodoCreate;

const Container = styled.div`
  width: 100%;
  height: 28%;
  background-color: #E1E2E1;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  top: 20%;
`;

const Input = styled.input`
  width: 90%;
  height: 80%;
  padding: 2px 12px 2px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #89abc6;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  position: absolute;
  left: 67%;
  top: 43%;
  z-index: 1;
`;
