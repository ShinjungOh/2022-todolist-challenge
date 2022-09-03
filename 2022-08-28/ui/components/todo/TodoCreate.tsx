import React, { ChangeEvent, FormEvent, memo } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
}

const TodoCreate = ({
  isOpen, onToggle, onChange, onSubmit, value,
}: Props) => (
  <Container>
    {isOpen
        && <FormContainer onSubmit={onSubmit}>
          <InputContainer>
            <Input onChange={onChange} value={value} placeholder="입력 후 enter" />
          </InputContainer>
           </FormContainer>
      }
    <Button onClick={onToggle} isOpen={isOpen}>
      {isOpen ? '닫기' : '추가'}
    </Button>
  </Container>
);

export default memo(TodoCreate);

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
  bottom: 3%;
  z-index: 1;
`;
