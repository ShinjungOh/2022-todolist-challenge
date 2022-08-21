import React, { useState } from 'react';
import styled from 'styled-components';

const TodoCreate = () => {
  const [isOpenCreate, setIsOpenCreate] = useState();
  const [createInput, setCreateInput] = useState();

  return (
    <Container>
      <Input placeholder="입력 후 Enter" />
      <CreateButton>
        <img src="/icon/svgs/plus.svg" alt="추가 버튼" />
      </CreateButton>
    </Container>
  );
};

export default TodoCreate;

const Container = styled.div`
  height: 140px;
  background-color: #F5F5F6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-top: 1px solid #eaeaea;
`;

const Input = styled.input`
  width: 90%;
  height: 50px;
  padding-left: 15px;
`;

const CreateButton = styled.button`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  padding: 12px;
  position: relative;
  left: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DCEDC8;
  border: none;
  border-radius: 50%;
  z-index: 5;
`;
