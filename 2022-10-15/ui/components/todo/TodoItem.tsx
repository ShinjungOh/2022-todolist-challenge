import React, { memo } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import { TodoItemType } from '../../../lib/interface/todo.interface';

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
    <Done
      done={done}
      onClick={() => onDone(id)}
    >
      {
        done
        && <FaCheck />
      }
    </Done>
    <Text done={done}>{text}</Text>
    <Delete
      onClick={() => onDelete(id)}
    >
      <FaTrash color="grey" />
    </Delete>
  </Container>
);

export default memo(TodoItem);

const Container = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Done = styled.div<{ done: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #5353e3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => props.done
          && css`
            color: grey;
          `}
`;

const Text = styled.div<{ done: boolean }>`
  font-size: 18px;
  padding-left: 10px;
  flex: 1 1;
  ${(props) => props.done
          && css`
            text-decoration: line-through;
            color: grey;
          `}
`;

const Delete = styled.div`
`;
