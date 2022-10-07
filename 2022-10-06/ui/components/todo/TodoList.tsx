import React, { memo } from 'react';
import styled from 'styled-components';

import { TodoItem } from '@components/todo/index';
import { TodoItemType } from 'lib/interface/todo.interface';

interface Props {
  todos: TodoItemType[];
  onDone: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({
  todos,
  onDone,
  onDelete,
}: Props) => (
  <Container>
    {
      todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          onDone={onDone}
          onDelete={onDelete}
        />
      ))
    }
  </Container>
);

export default memo(TodoList);

const Container = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px;
  overflow-y: auto;
`;
