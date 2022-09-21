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
  const [createItem, setCreateItem] = useState('');

  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const nextId = useRef(0);

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCreateTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateItem(value);
  };

  const handleSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextId.current += 1;
    setTodos((prev) => [...prev,
      {
        id: nextId.current,
        text: createItem,
        done: false,
      },
    ]);
    setIsOpen(false);
    setCreateItem('');
  };

  const onToggleDone = (id: number) => {
    setTodos((prev) => prev.map((el) => (el.id === id
      ? {
        ...el,
        done: !el.done,
      }
      : el)));
  };

  const onClickDelete = (id: number) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  const unDoneTodoLength = useMemo(() => (todos.filter((el) => !el.done)).length, [todos]);

  return (
    <>
      <TodoHeader
        undoneTodoLength={unDoneTodoLength}
      />
      <TodoList
        todos={todos}
        onToggleDone={onToggleDone}
        onDelete={onClickDelete}
      />
      <TodoCreate
        onToggle={onToggleIsOpen}
        onCreate={handleCreateTodo}
        onSubmit={handleSubmitTodo}
        isOpen={isOpen}
        value={createItem}
      />
    </>
  );
};

export default Todolist;
