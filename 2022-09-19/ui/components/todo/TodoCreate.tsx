import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

const TodoCreate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createItem, setCreateItem] = useState('');

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCreateTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateItem(value);
  };

  const handleSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setCreateItem('');
  };

  return (
    <>
      {
        isOpen
        && <Container>
          <FormContainer onSubmit={handleSubmitTodo}>
            <Input onChange={handleCreateTodo} value={createItem} placeholder="입력 후 enter로 답변 제출" />
          </FormContainer>
        </Container>
      }
      <Button isOpen={false} onClick={onToggleIsOpen}>
        {
          isOpen ? '닫기' : '추가'
        }
      </Button>
    </>
  );
};

export default TodoCreate;

const Container = styled.div`
  width: 100%;
  height: 28%;
  background-color: #eeecec;
  position: absolute;
  bottom: 0;
`;

const FormContainer = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 40%;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 15px;
  padding: 0 15px 0 15px;
  cursor: pointer;
`;

const Button = styled.button<{ isOpen: boolean }>`
  width: 80px;
  height: 40px;
  background-color: #ffd733;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 450;
  position: absolute;
  right: 10%;
  bottom: 5%;
  cursor: pointer;
  z-index: 1;
`;
