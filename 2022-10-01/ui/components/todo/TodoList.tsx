import React from 'react';
import styled from 'styled-components';

import { TodoItem } from '@components/todo/index';

const TodoList = () => (
  <Container>
    <TodoItem />
  </Container>
);

export default TodoList;

const Container = styled.div`
  padding: 10px 20px;
  position: relative;
  width: 100%;
  height: 60%;
  overflow-y: auto;
`;
