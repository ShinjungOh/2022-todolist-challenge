import React, {
  ChangeEvent, FormEvent, useMemo, useRef, useState,
} from 'react';

import { Header, TodoCreate, TodoList } from '@ui/components/todo';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [createItem, setCreateItem] = useState('');

  const unDoneTaskLength = useMemo(() => todos.filter((todos) => !todos.done).length, [todos]);

  const nextId = useRef(0);

  const onToggleDone = (id: number) => {
    console.log('done');
  };

  const onClickDelete = (id: number) => {
    console.log('delete');
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  const onToggleIsOpen = () => {
    console.log('plus');
    setIsOpenCreate((prev) => !prev);
  };

  const onChangeCreateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('input : ', value);
    setCreateItem(value);
  };

  const onSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextId.current += 1;
    console.log('submit');
    console.log(nextId);
    setTodos((prev) => [...prev,
      {
        id: nextId.current,
        text: createItem,
        done: false,
      },
    ]);
    setIsOpenCreate(false);
    setCreateItem('');
  };

  return (
    <>
      <Header unDoneTaskLength={unDoneTaskLength} />
      <TodoList onToggleDone={onToggleDone} onClickDelete={onClickDelete} todos={todos} />
      <TodoCreate
        isOpen={isOpenCreate}
        onToggleIsOpen={onToggleIsOpen}
        onChangeCreateInput={onChangeCreateInput}
        onSubmitCreate={onSubmitCreate}
        value={createItem}
      />
    </>
  );
};

export default Todolist;
