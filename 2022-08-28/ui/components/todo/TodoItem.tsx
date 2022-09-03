import React from 'react';
import styled, { css } from 'styled-components';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  onClickDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
}

const TodoItem = ({
  onClickDelete,
  onToggleDone,
  id,
  done,
  text,
}: Props & TodoItemType) => (
  <Container>
    <DoneButton done={done}>
      <DoneCheck onClick={() => onToggleDone(id)}>
        {
          done && <img src="./icon/svgs/check.svg" alt="완료" />
        }
      </DoneCheck>
    </DoneButton>
    <TodoText done={done}>{text}</TodoText>
    <DeleteButton onClick={() => onClickDelete(id)}>
      <img src="./icon/svgs/delete.svg" alt="삭제" />
    </DeleteButton>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  width: 100%;
  height: 15%;
  padding: 2px 30px 2px 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #edffff;
`;

const DoneButton = styled.div<{done: boolean}>`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
  ${(props) => props.done
          && css`
            border-color: #89abc6;
          `}
`;

const DoneCheck = styled.div`
  width: 25px;
  height: 25px;
  padding: 3px 0.5px 2px 3px;
`;

const TodoText = styled.text<{ done: boolean }>`
  flex: 1;
  font-size: 20px;
  ${(props) => props.done
          && css`
            color: gray;
            text-decoration: line-through;
          `}
`;

const DeleteButton = styled.div`
  width: 14px;
  height: 14px;
  margin-bottom: 8px;
  cursor: pointer;
`;
