import React from 'react';
import styled from 'styled-components';

import { TodoItem } from '@components/todo/index';

import { TodoItemType } from '../../../lib/interface/todo.interface';

interface Props {
  todos: TodoItemType[];
  onDone: (id: number) => void;
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

export default TodoList;

const Container = styled.div`
  position: absolute;
  top: 25%;
  width: 100%;
  height: 55%;
  padding: 15px 30px;
  overflow-y: auto;
`;
