import React, {
  ChangeEvent, FormEvent, useEffect, useMemo, useState,
} from 'react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

// eslint-disable-next-line import/no-cycle
import { getTodoList } from '../lib/api/todo/getTodoList';
import { postTodoList } from '../lib/api/todo/postTodoList';
import { deleteTodoList } from '../lib/api/todo/deleteTodoList';
import { patchTodoList } from '../lib/api/todo/patchTodoList';

export interface TodoItemType {
  id: number;
  done: boolean;
  text: string;
}

const Todolist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createItem, setCreateItem] = useState('');

  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCreateTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateItem(value);
  };

  const handleSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postTodoList({ text: createItem });
      await getTodo();
      setIsOpen(false);
      setCreateItem('');
    } catch (e) {
      alert('오류 발생!');
    }
  };

  const onToggleDone = async (id: number, done: boolean) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await patchTodoList(id, done);
      await getTodo();
    } catch (e) {
      throw e;
    }
  };

  const onClickDelete = async (id: number) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await deleteTodoList(id);
      await getTodo();
    } catch (e) {
      throw e;
    }
  };

  const unDoneTodoLength = useMemo(() => (todos.filter((el) => !el.done)).length, [todos]);

  const getTodo = async () => {
    try {
      const result = await getTodoList();
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
