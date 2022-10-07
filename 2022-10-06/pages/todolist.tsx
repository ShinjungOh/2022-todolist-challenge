import React, {
  ChangeEvent, FormEvent, useEffect, useMemo,
} from 'react';
import { observer } from 'mobx-react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

import { useTodoStores } from '../lib/store/stores';

const Todolist = () => {
  const { todoStore } = useTodoStores();

  const onToggleIsOpen = () => {
    todoStore.onToggle();
  };

  const onTodoCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    todoStore.onCreate(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await todoStore.onSubmit(todoStore.createTodo);
    todoStore.onToggle(false);
    todoStore.createTodo = '';
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
        isOpen={todoStore.isOpen}
        onToggle={onToggleIsOpen}
        onCreate={onTodoCreate}
        onSubmit={onSubmit}
        value={todoStore.createTodo}
      />
    </>
  );
};

export default observer(Todolist);
