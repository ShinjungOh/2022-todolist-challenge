import React, {
  ChangeEvent, FormEvent, useMemo, useRef, useState,
} from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

import getDateString from '../lib/utils/getDateString';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
}

const {
  dateString,
  dayName,
} = getDateString();

const Todolist = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [createInput, setCreateInput] = useState('');
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const unDoneTaskLength = useMemo(() => todos.filter((todo) => !todo.done).length, [todos]);

  const nextId = useRef(0);

  const onToggleIsOpenCreate = () => {
    setIsOpenCreate((prev) => !prev);
  };

  const onChangeCreateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateInput(value);
  };

  const onSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextId.current += 1;
    setTodos((prev) => [...prev,
      {
        id: nextId.current,
        text: createInput,
        done: false,
      },
    ]);
    setIsOpenCreate(false);
    setCreateInput('');
  };

  const onToggleDone = (id: number) => {
    setTodos((prev) => prev.map((el) => (el.id === id ? ({ ...el, done: !el.done }) : el)));
  };

  const onClickDelete = (id: number) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div>
      <TodoHeader
        dateString={dateString}
        dayName={dayName}
        undoneTaskLength={unDoneTaskLength}
      />
      <TodoList
        todos={todos}
        onToggleDone={onToggleDone}
        onClickDelete={onClickDelete}
      />
      <TodoCreate
        isOpen={isOpenCreate}
        onToggle={onToggleIsOpenCreate}
        onChange={onChangeCreateInput}
        onSubmit={onSubmitCreate}
        value={createInput}
      />
    </div>
  );
};

export default Todolist;
