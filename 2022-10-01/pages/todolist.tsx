import React, {
  ChangeEvent, FormEvent, useEffect, useMemo, useState,
} from 'react';
import { observer } from 'mobx-react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

// eslint-disable-next-line import/no-cycle
import { useTodoStores } from '../lib/store/stores';

export interface TodoItemType {
  id: number;
  done: boolean;
  text: string;
}

const Todolist = () => {
  const { todoStore } = useTodoStores();
  const [isOpen, setIsOpen] = useState(false);
  const [createTodo, setCreateTodo] = useState('');

  console.log(todoStore.todos);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateTodo(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await todoStore.onSubmit(createTodo);
    setCreateTodo('');
    setIsOpen(false);
  };

  const onClickDone = async (id: number, done: boolean) => {
    await todoStore.onDone(id, done);
  };

  const onClickDelete = async (id: number) => {
    await todoStore.onDelete(id);
  };

  const unDoneTodoLength = useMemo(() => (todoStore.todos.filter((todo) => !todo.done).length), [todoStore.todos]);

  useEffect(() => {
    todoStore.getTodo();
  }, []);

  return (
    <>
      <TodoHeader
        unDoneTodoLength={unDoneTodoLength}
      />
      <TodoList
        todos={todoStore.todos}
        onDone={onClickDone}
        onDelete={onClickDelete}
      />
      <TodoCreate
        isOpen={isOpen}
        value={createTodo}
        onToggle={onToggle}
        onCreate={onCreate}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default observer(Todolist);
