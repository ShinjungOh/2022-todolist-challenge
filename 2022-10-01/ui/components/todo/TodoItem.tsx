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
        done && (
          <FaCheck size={20} color="grey" />
        )
      }
    </Done>
    <Text done={done}>{text}</Text>
    <Delete onClick={() => onDelete(id)}>
      <FaTrash size={20} color="grey" />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  width: 100%;
  height: 8%;
  padding: 25px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Done = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid grey;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => props.done
          && css`
            border-color: #FFCC80;
          `}
`;

const Text = styled.div<{ done: boolean }>`
  font-size: 20px;
  margin-left: 15px;
  flex: 1 1;
  ${(props) => props.done
          && css`
            text-decoration: line-through;
            color: grey;
          `}
`;

const Delete = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
