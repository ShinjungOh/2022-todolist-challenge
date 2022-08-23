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
  position: relative;
  height: 400px;
  overflow-y: auto;
  padding: 10px 40px 30px 40px;
`;
