import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

const TodoCreate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createTodo, setCreateTodo] = useState();

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateTodo(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateTodo('');
    setIsOpen(false);
  };

  return (
    <>
      {
        isOpen
        && <TodoContainer>
          <InputForm onSubmit={onSubmit}>
            <Input
              onChange={onCreate}
              value={createTodo}
              placeholder="enter를 눌러 입력하세요."
              autoFocus
            />
          </InputForm>
        </TodoContainer>
      }
      <Button isOpen={isOpen} onClick={toggleIsOpen}>
        {
          isOpen ? '닫기' : '추가'
        }
      </Button>
    </>
  );
};

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

const Button = styled.button<{ isOpen: boolean }>`
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
