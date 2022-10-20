import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  value: string;
  onToggle: () => void;
  onCreate: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const TodoCreate = ({
  isOpen,
  value,
  onToggle,
  onCreate,
  onSubmit,
}: Props) => (
  <>
    {
      isOpen
      && (
        <InputContainer>
          <TodoForm onSubmit={onSubmit}>
            <Input
              value={value}
              onChange={onCreate}
              placeholder="입력 후 enter를 눌러 제출"
              autoFocus
            />
          </TodoForm>
        </InputContainer>
      )
    }
    <Button
      onClick={onToggle}
    >
      {isOpen ? '닫기' : '추가'}
    </Button>
  </>
);

export default TodoCreate;

const InputContainer = styled.div`
  width: 100%;
  height: 25%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #dcdcdc;
  background-color: #eeeeee;
`;

const TodoForm = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 85%;
  height: 40%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px 18px;
  font-size: 17px;
`;

const Button = styled.button`
  width: 75px;
  height: 40px;
  position: absolute;
  bottom: 4%;
  right: 7%;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  background-color: #5353e3;
  cursor: pointer;
  z-index: 2;
`;
