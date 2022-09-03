import React from 'react';
import styled from 'styled-components';

import { TodoItem } from '@components/todo/index';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  onClickDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
  todos: TodoItemType[];
}

const TodoList = ({
  onClickDelete,
  onToggleDone,
  todos,
}: Props) => (
  <Container>
    {todos.map((todo) => <TodoItem
      key={todo.id}
      {...todo}
      onClickDelete={onClickDelete}
      onToggleDone={onToggleDone}
    />)
    }
  </Container>
);

export default TodoList;

const Container = styled.div`
  width: 100%;
  height: 47%;
  overflow-y: auto;
`;
