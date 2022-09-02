import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

const TodoCreate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createItem, setCreateItem] = useState('');

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeCreateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setCreateItem(value);
  };

  const onSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setCreateItem('');
    console.log('submit');
  };

  return (
    <Container>
      {isOpen
        && <FormContainer onSubmit={onSubmitCreate}>
          <InputContainer>
            <Input onChange={onChangeCreateInput} value={createItem} placeholder="입력 후 enter" />
          </InputContainer>
        </FormContainer>
      }
      <Button onClick={onToggleIsOpen} isOpen={isOpen}>
        {isOpen ? '닫기' : '추가'}
      </Button>
    </Container>
  );
};

export default TodoCreate;

const Container = styled.div`
  width: 100%;
  height: 28%;
`;

const FormContainer = styled.form`
  width: 100%;
  height: 100%;
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

const Button = styled.button<{ isOpen: boolean }>`
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
