import React from 'react';
import styled, { css } from 'styled-components';
import { FaTrash, FaCheck } from 'react-icons/fa';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({
  onToggleDone,
  onDelete,
  id,
  text,
  done,
}: Props & TodoItemType) => (
  <Container>
    <Done done={done} onClick={() => onToggleDone(id)}>
      {
        done && <FaCheck size="23" />
      }
    </Done>
    <Text done={done}>{text}</Text>
    <Delete onClick={() => onDelete(id)}>
      <FaTrash color="#b79a12" size="23" />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  width: 100%;
  height: 12%;
  background-color: #fff7df;
  padding: 5px 20px 5px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Done = styled.div<{ done: boolean }>`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  border: 1px solid #9d9d9d;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) => props.done
          && css`
            border-color: #ffd733;
          `}
`;

const Text = styled.text<{ done: boolean }>`
  font-size: 20px;
  flex: 1 1;
  ${(props) => props.done
          && css`
            color: #9d9d9d;
            text-decoration: line-through;
          `}
`;

const Delete = styled.text`
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
