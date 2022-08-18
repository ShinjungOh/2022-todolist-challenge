import React from 'react';
import styled from 'styled-components';

import { TodoItem } from '@components/todo';

import { TodoItemType } from '../../../pages/todolist';

interface Props {
  todos: TodoItemType[];
  onToggleDone: (id: number) => void;
  onClickDelete: (id: number) => void;
}

const TodoList = ({
  todos,
  onToggleDone,
  onClickDelete,
}: Props) => (
  <Container>
    {
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggleDone={onToggleDone}
          onClickDelete={onClickDelete}
        />
      ))
    }
  </Container>
);

export default TodoList;

const Container = styled.div`
  height: 400px;
  padding: 20px 35px 20px 35px;
  overflow-y: auto;
`;
