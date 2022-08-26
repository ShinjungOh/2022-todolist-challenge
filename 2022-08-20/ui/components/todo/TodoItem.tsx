import React from 'react';
import styled from 'styled-components';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  onToggleDone: (id: number) => void;
  onClickDelete: (id: number) => void;
}

const TodoItem = ({
  id,
  text,
  done,
  onToggleDone,
  onClickDelete,
}: Props & TodoItemType) => (
  <Container>
    <CheckBox done={done} onClick={() => onToggleDone(id)}>
      {
        done && (
          <img src="/icon/svgs/check.svg" alt="체크 표시" />
        )
      }
    </CheckBox>
    <TodoText done={done}>{text}</TodoText>
    <Delete onClick={() => onClickDelete(id)}>
      <img src="/icon/svgs/delete.svg" alt="삭제" />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const CheckBox = styled.div<{ done: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #5d5a5a;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px 5px;
`;

const TodoText = styled.text<{ done: boolean }>`
  padding-left: 17px;
  font-size: 23px;
  color: #5d5a5a;
  flex: 1;
`;

const Delete = styled.button`
  width: 20px;
  height: 20px;
  padding: 1px 2px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
