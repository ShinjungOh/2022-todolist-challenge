import React, {
  ChangeEvent, FormEvent, useEffect, useMemo, useState,
} from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

import { getTodoItem } from '../lib/api/todo/getTodoItem';
import { deleteTodoItem } from '../lib/api/todo/deleteTodoItem';
import { patchTodoItem } from '../lib/api/todo/patchTodoItem';
import { postTodoItem } from '../lib/api/todo/postTodoItem';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
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
      setIsOpen(false);
      setCreateTodo('');
    } catch (e) {
      alert('오류 발생!');
    }
  };

  const onDone = async (id: number, done: boolean) => {
    try {
      await patchTodoItem(id, done);
      await getTodo();
    } catch (e) {
      alert('오류 발생!');
    }
  };

  const onDelete = async (id: number) => {
    try {
      await deleteTodoItem(id);
      await getTodo();
    } catch (e) {
      alert('오류 발생!');
    }
  };

  const undoneTodoLength = useMemo(() => todos.filter((todo) => !todo.done).length, [todos]);

  const getTodo = async () => {
    try {
      const result = await getTodoItem();
      setTodos(result);
    } catch (e) {
      alert('오류 발생!');
      setTodos([]);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <TodoHeader
        undoneTodoLength={undoneTodoLength}
      />
      <TodoList
        todos={todos}
        onDone={onDone}
        onDelete={onDelete}
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

export default Todolist;
