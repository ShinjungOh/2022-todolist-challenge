import React, { memo } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({
  id,
  done,
  text,
  onDone,
  onDelete,
}: Props & TodoItemType) => (
  <Container>
    <Done done={done} onClick={() => onDone(id)}>
      {
        done && (
          <FaCheck size={20} />
        )
      }
    </Done>
    <Text done={done}>{text}</Text>
    <Delete onClick={() => onDelete(id)}>
      <FaTrash size={17} />
    </Delete>
  </Container>
);

export default memo(TodoItem);

const Container = styled.div`
  width: 100%;
  height: 13%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Done = styled.div<{ done: boolean }>`
  width: 35px;
  height: 35px;
  border: 1px solid grey;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) => props.done
          && css`
            border-color: lightblue;
          `}
`;

const Text = styled.div<{ done: boolean }>`
  padding-left: 20px;
  font-size: 19px;
  font-weight: normal;
  flex: 1;
  ${(props) => props.done
          && css`
            color: grey;
            text-decoration: line-through;
          `}
`;

const Delete = styled.div`
  cursor: pointer;
`;
