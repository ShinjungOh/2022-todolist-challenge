import React, { ChangeEvent, FormEvent, memo } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  onCreate: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
}

const TodoCreate = ({
  isOpen,
  onToggle,
  onCreate,
  onSubmit,
  value,
}: Props) => (
  <>
    {
      isOpen
      && (
        <InputContainer>
          <InputForm onSubmit={onSubmit}>
            <Input
              onChange={onCreate}
              value={value}
              placeholder="enter를 눌러 제출"
              autoFocus
            />
          </InputForm>
        </InputContainer>
      )
    }
    <Button onClick={onToggle}>
      {isOpen ? '닫기' : '추가'}
    </Button>
  </>
);

export default memo(TodoCreate);

const InputContainer = styled.div`
  width: 100%;
  height: 25%;
  background-color: #f6f6f6;
  position: absolute;
  bottom: 0;
`;

const InputForm = styled.form`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20%;
`;

const Input = styled.input`
  width: 85%;
  height: 100%;
  padding: 17px;
  font-size: 16px;
  border: 0.5px solid #aeaeae;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 75px;
  height: 40px;
  position: absolute;
  bottom: 4%;
  right: 8%;
  border: none;
  border-radius: 5px;
  background-color: lightblue;
  font-size: 19px;
  cursor: pointer;
  z-index: 1;
`;
