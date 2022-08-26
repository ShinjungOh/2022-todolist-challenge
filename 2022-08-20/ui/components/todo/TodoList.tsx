import React, { memo } from 'react';
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

export default memo(TodoList);

const Container = styled.div`
  position: relative;
  height: 64%;
  overflow-y: auto;
  padding: 10px 40px 30px 40px;
`;
