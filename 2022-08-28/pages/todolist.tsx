import React, {
  ChangeEvent, FormEvent, useEffect, useMemo, useState,
} from 'react';

import { TodoHeader, TodoCreate, TodoList } from '@components/todo';

// eslint-disable-next-line import/no-cycle
import { getTodoList } from '../lib/api/todo/getTodoList';
import { deleteTodoList } from '../lib/api/todo/deleteTodoList';
import { postTodoList } from '../lib/api/todo/postTodoList';
import { patchTodoList } from '../lib/api/todo/patchTodoList';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [createItem, setCreateItem] = useState('');

  const unDoneTaskLength = useMemo(() => todos.filter((todos) => !todos.done).length, [todos]);

  const onToggleDone = async (id: number, done: boolean) => {
    try {
      await patchTodoList({ id, done });
      await getTodo();
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const onClickDelete = async (id: number) => {
    try {
      await deleteTodoList(id);
      await getTodo();
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeCreateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateItem(value);
  };

  const onSubmitCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postTodoList({ text: createItem });
      await getTodo();
      setIsOpen(false);
      setCreateItem('');
    } catch (e) {
      alert('오류가 발생했습니다.');
    }
  };

  const getTodo = async () => {
    try {
      const result = await getTodoList();
      setTodos(result);
    } catch (e) {
      setTodos([]);
      alert('오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <TodoHeader
        unDoneTaskLength={unDoneTaskLength}
      />
      <TodoList
        onClickDelete={onClickDelete}
        onToggleDone={onToggleDone}
        todos={todos}
      />
      <TodoCreate
        isOpen={isOpen}
        onToggle={onToggleIsOpen}
        onChange={onChangeCreateInput}
        onSubmit={onSubmitCreate}
        value={createItem}
      />
    </>
  );
};

export default Todolist;
