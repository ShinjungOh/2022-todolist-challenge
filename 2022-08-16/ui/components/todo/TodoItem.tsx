import React from 'react';
import styled, { css } from 'styled-components';
import { MdDelete, MdDone } from 'react-icons/md';

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
      {done && <MdDone />}
    </CheckBox>
    <Text done={done}>{text}</Text>
    <Remove onClick={() => onClickDelete(id)}>
      <MdDelete />
    </Remove>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const CheckBox = styled.div<{ done: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 20px;
  cursor: pointer;
  ${(props) => props.done
          && css`
            border: 1px solid #3a68f9;
            color: #3a68f9;
          `}
`;

const Text = styled.div<{ done: boolean }>`
  color: #252424;
  font-size: 18px;
  justify-content: start;
  ${(props) => props.done
          && css`
            color: #ced4da;
            text-decoration: line-through;
          `};
`;

const Remove = styled.div`
  color: #b6b3b3;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #3a68f9;
  }
`;
