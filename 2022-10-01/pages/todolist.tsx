import React from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

const Todolist = () => (
  <>
    <TodoHeader />
    <TodoList />
    <TodoCreate />
  </>
);

export default Todolist;
