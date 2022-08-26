import React from 'react';
import styled from 'styled-components';

import { TodoItem } from '@components/todo/index';

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
      todos.map((todo) => <TodoItem
        key={todo.id}
        {...todo}
        onToggleDone={onToggleDone}
        onClickDelete={onClickDelete}
      />)
    }
  </Container>
);

export default TodoList;

const Container = styled.div`
  position: relative;
  height: 400px;
  overflow-y: auto;
  padding: 10px 40px 30px 40px;
`;