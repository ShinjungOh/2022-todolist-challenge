import React, {
  ChangeEvent, FormEvent, useMemo, useRef, useState,
} from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

export interface TodoItemType {
  id: number;
  done: boolean;
  text: string;
}

const Todolist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createTodo, setCreateTodo] = useState('');

  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const nextId = useRef(0);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateTodo(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((todo) => [
      ...todo,
      {
        id: nextId.current,
        text: createTodo,
        done: false,
      },
    ]);
    nextId.current += 1;
    setCreateTodo('');
    setIsOpen(false);
  };

  const onDone = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? {
      ...todo,
      done: !todo.done,
    } : todo)));
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const unDoneTodoLength = useMemo(() => (todos.filter((todo) => !todo.done).length), [todos]);

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
