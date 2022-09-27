import React, {
  ChangeEvent, FormEvent, useMemo, useRef, useState,
} from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
}

const Todolist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createTodo, setCreateTodo] = useState('');
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const nextId = useRef(0);

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateTodo(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos(
      (todo) => [
        ...todo,
        {
          id: nextId.current,
          text: createTodo,
          done: false,
        },
      ],
    );
    nextId.current += 1;
    setCreateTodo('');
    setIsOpen(false);
  };

  const onDoneTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const unDoneTodoLength = useMemo(() => (todos.filter((todo) => !todo.done)).length, [todos]);

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
