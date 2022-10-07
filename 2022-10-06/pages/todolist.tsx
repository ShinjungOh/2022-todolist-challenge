import React, {
  ChangeEvent, FormEvent, useEffect, useMemo, useState,
} from 'react';
import { observer } from 'mobx-react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

// eslint-disable-next-line import/no-cycle
import { useTodoStores } from '../lib/store/stores';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
}

const Todolist = () => {
  const { todoStore } = useTodoStores();
  const [isOpen, setIsOpen] = useState(false);
  const [createTodo, setCreateTodo] = useState('');

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
    setIsOpen(false);
    setCreateTodo('');
  };

  const onClickDone = async (id: number, done: boolean) => {
    await todoStore.onDone(id, done);
  };

  const onClickDelete = async (id: number) => {
    await todoStore.onDelete(id);
  };

  const undoneTodoLength = useMemo(() => todoStore.todos.filter((todo) => !todo.done).length, [todoStore.todos]);

  useEffect(() => {
    todoStore.getTodo();
  }, []);

  return (
    <>
      <TodoHeader
        undoneTodoLength={undoneTodoLength}
      />
      <TodoList
        todos={todoStore.todos}
        onDone={onClickDone}
        onDelete={onClickDelete}
      />
      <TodoCreate
        isOpen={isOpen}
        onToggle={onToggle}
        onCreate={onCreate}
        onSubmit={onSubmit}
        value={createTodo}
      />
    </>
  );
};

export default observer(Todolist);
