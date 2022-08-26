import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onToggleIsOpen: () => void;
  onChangeCreateInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitCreate: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
}

const TodoCreate = ({
  isOpen,
  onToggleIsOpen,
  onChangeCreateInput,
  onSubmitCreate,
}: Props) => (
  <div>
    {
      isOpen
      && (
        <InputContainer>
          <CreateForm onSubmit={onSubmitCreate}>
            <Input onChange={onChangeCreateInput} autoFocus placeholder="입력 후 Enter" />
          </CreateForm>
        </InputContainer>
      )
    }
    <CreateButton isOpen={isOpen} onClick={onToggleIsOpen}>
      <img src="/icon/svgs/plus.svg" alt="추가 버튼" />
    </CreateButton>
  </div>
);

export default TodoCreate;

const InputContainer = styled.div`
  width: 100%;
  height: 140px;
  background-color: #F5F5F6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-top: 1px solid #eaeaea;
`;

const CreateForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 90%;
  height: 50px;
  padding-left: 15px;
`;

const CreateButton = styled.button<{ isOpen: boolean }>`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  padding: 12px;
  position: absolute;
  top: 77%;
  left: 78%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DCEDC8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;
`;
