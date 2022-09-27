import React from 'react';
import styled, { css } from 'styled-components';
import { FaCheck, FaTrash } from 'react-icons/fa';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({
  id,
  text,
  done,
  onDone,
  onDelete,
}: Props & TodoItemType) => (
  <Container>
    <Done
      done={done}
      onClick={() => onDone(id)}
    >
      {
        done
        && <FaCheck size={24} />
      }
    </Done>
    <Text done={done}>
      {text}
    </Text>
    <Delete onClick={() => onDelete(id)}>
      <FaTrash size={18} />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
`;

const Done = styled.div<{ done: boolean }>`
  width: 38px;
  height: 38px;
  border: 1px solid grey;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) => props.done
          && css`
            border-color: #6289ff;
            color: #4b4b4b;
          `}
`;

const Text = styled.div<{ done: boolean }>`
  padding-left: 18px;
  font-size: 20px;
  color: #3d3c3c;
  flex: 1 1;
  ${(props) => props.done
          && css`
            color: #a6a5a5;
            text-decoration: line-through;
          `}
`;

const Delete = styled.div`
  cursor: pointer;
`;
