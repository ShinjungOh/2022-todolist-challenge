import React, {
  ChangeEvent, FormEvent, useEffect, useMemo, useState,
} from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

// eslint-disable-next-line import/no-cycle
import getTodoItem from '../lib/api/todo/getTodoItem';
import deleteTodoItem from '../lib/api/todo/deleteTodoItem';
import patchTodoItem from '../lib/api/todo/patchTodoItem';
import postTodoItem from '../lib/api/todo/postTodoItem';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
}

const Todolist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createTodo, setCreateTodo] = useState('');
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const onToggleIsOpen = () => {
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
      alert('오류가 발생했습니다.');
    }
  };

  const onDoneTodo = async (id: number, done: boolean) => {
    try {
      await patchTodoItem(id, done);
      await getTodo();
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const onDeleteTodo = async (id: number) => {
    try {
      await deleteTodoItem(id);
      await getTodo();
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const unDoneTodoLength = useMemo(() => (todos.filter((todo) => !todo.done)).length, [todos]);

  const getTodo = async () => {
    // eslint-disable-next-line no-useless-catch
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
        onDone={onDoneTodo}
        onDelete={onDeleteTodo}
      />
      <TodoCreate
        isOpen={isOpen}
        onToggle={onToggleIsOpen}
        value={createTodo}
        onCreate={onCreate}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Todolist;
