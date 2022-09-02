import React from 'react';

import { TodoHeader, TodoCreate, TodoList } from '@components/todo';

const Todolist = () => (
  <>
    <TodoHeader />
    <TodoList />
    <TodoCreate />
  </>
);

export default Todolist;
