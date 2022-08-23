import React from 'react';

import { Header, TodoCreate, TodoList } from '@ui/components/todo';

const Todolist = () => (
  <>
    <Header />
    <TodoList />
    <TodoCreate />
  </>
);

export default Todolist;
