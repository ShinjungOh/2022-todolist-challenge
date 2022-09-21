import React, { memo } from 'react';
import styled from 'styled-components';

import { TodoItem } from '@components/todo/index';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  todos: TodoItemType[];
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({
  todos,
  onToggleDone,
  onDelete,
}: Props & TodoItemType) => (
  <Container>
    {
      todos.map((todo) => <TodoItem
        {...todo}
        key={todo.id}
        onToggleDone={onToggleDone}
        onDelete={onDelete}
      />)
    }
  </Container>
);
export default memo(TodoList);

const Container = styled.div`
  width: 100%;
  height: 60%;
  overflow-y: auto;
`;
