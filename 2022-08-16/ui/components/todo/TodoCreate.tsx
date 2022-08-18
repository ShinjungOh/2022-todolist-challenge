import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
}

const TodoCreate = ({
  isOpen,
  onToggle,
  onChange,
  onSubmit,
  value,
}: Props) => (
  <>
    <CreateButton isOpen={isOpen} onClick={onToggle}>
      {isOpen ? '닫기' : '추가'}
    </CreateButton>
    {
      isOpen && (
        <CreateContainer>
          <CreateForm onSubmit={onSubmit}>
            <Input onChange={onChange} value={value} placeholder="입력 후 Enter" />
          </CreateForm>
        </CreateContainer>
      )
    }
  </>
);

export default TodoCreate;

const CreateButton = styled.button<{isOpen: boolean}>`
  width: 70px;
  height: 40px;
  background-color: #3a68f9;
  color: white;
  border: 1px none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  bottom: 30px;
  right: 27px;
  cursor: pointer;
  z-index: 5;
  transition: 0.5s all ease-in;
`;

const CreateContainer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateForm = styled.form`
`;

const Input = styled.input`
  width: 320px;
  height: 40px;
  padding: 10px;
  background-color: white;
  border: 1px solid #6e6a6a;
  border-radius: 5px;
  font-size: 16px;
`;
