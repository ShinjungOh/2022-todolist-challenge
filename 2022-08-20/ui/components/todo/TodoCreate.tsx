import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

const TodoCreate = ({ isOpen }: Props) => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [createItem, setCreateItem] = useState('');

  const onToggleIsOpen = () => {
    setIsOpenCreate((prev) => !prev);
  };

  const onChangeCreateInput = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setCreateItem(value);
  };

  const onSubmitCreate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsOpenCreate(false);
    setCreateItem('');
  };

  return (
    <div>
      {
        isOpen
        && (
          <InputContainer>
            <CreateForm onSubmit={onSubmitCreate}>
              <Input onChange={onChangeCreateInput} value={createItem} autoFocus placeholder="입력 후 Enter" />
            </CreateForm>
          </InputContainer>
        )
      }
      <CreateButton isOpen={isOpenCreate} onClick={onToggleIsOpen}>
        <img src="/icon/svgs/plus.svg" alt="추가 버튼" />
      </CreateButton>
    </div>
  );
};

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
