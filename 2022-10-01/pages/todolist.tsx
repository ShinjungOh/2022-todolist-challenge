import React, {
  ChangeEvent, FormEvent, useEffect, useMemo, useState,
} from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';
import deleteTodoItem from 'lib/api/todo/deleteTodoItem';
import patchTodoItem from 'lib/api/todo/patchTodoItem';
// eslint-disable-next-line import/no-cycle
import getTodoItem from 'lib/api/todo/getTodoItem';
import postTodoItem from 'lib/api/todo/postTodoItem';

export interface TodoItemType {
  id: number;
  done: boolean;
  text: string;
}

const Todolist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createTodo, setCreateTodo] = useState('');

  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateTodo(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await postTodoItem(createTodo);
      await getTodo();
      setCreateTodo('');
      setIsOpen(false);
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const onDone = async (id: number, done: boolean) => {
    try {
      await patchTodoItem(id, done);
      await getTodo();
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const onDelete = async (id: number) => {
    try {
      await deleteTodoItem(id);
      await getTodo();
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const unDoneTodoLength = useMemo(() => (todos.filter((todo) => !todo.done).length), [todos]);

  const getTodo = async () => {
    try {
      const result = await getTodoItem();
      setTodos(result);
    } catch (e) {
      alert('오류가 발생했습니다.');
      setTodos([]);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <TodoHeader
        unDoneTodoLength={unDoneTodoLength}
      />
      <TodoList
        todos={todos}
        onDone={onDone}
        onDelete={onDelete}
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

export default Todolist;
