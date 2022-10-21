import React, {
  useEffect, useMemo, useState,
} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

import { useTodoStores } from '../lib/store/stores';
import { TodoItemType } from '../lib/interface/todo.interface';
import { getTodoItem } from '../lib/api/todo/getTodoItem';
import { postTodoItem } from '../lib/api/todo/postTodoItem';
import { patchTodoItem } from '../lib/api/todo/patchTodoItem';
import { deleteTodoItem } from '../lib/api/todo/deleteTodoItem';

const Todolist = () => {
  const router = useRouter();
  const { userStore } = useTodoStores();

  const [isOpen, setIsOpen] = useState(false);
  const [createItem, setCreateItem] = useState('');
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const onToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreateTodo = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setCreateItem(value);
  };

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      await postTodoItem({ text: createItem });
      await getTodo();
      setCreateItem('');
      setIsOpen(false);
    } catch (e) {
      alert('제출 오류가 발생했습니다.');
    }
  };

  const onDone = async (id: number, done: boolean) => {
    try {
      await patchTodoItem(id, done);
      await getTodo();
    } catch (e) {
      alert('할 일 완료 오류가 발생했습니다.');
    }
  };

  const onDelete = async (id: number) => {
    try {
      await deleteTodoItem(id);
      await getTodo();
    } catch (e) {
      alert('삭제 오류가 발생했습니다.');
    }
  };

  const unDoneTodoLength = useMemo(() => todos.filter((todo) => !todo.done).length, [todos]);

  const getTodo = async () => {
    try {
      const response = await getTodoItem();
      setTodos(response);
    } catch (e) {
      alert('불러오는 중 오류가 발생했습니다.');
      setTodos([]);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    (async () => {
      const isAuth = await userStore.getAuthUser;
      if (!isAuth) {
        alert('회원 정보가 없습니다.');
        router.push('/auth/signin');
      }
    })();
  }, []);

  return (
    <Container>
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
        value={createItem}
        onToggle={onToggleOpen}
        onCreate={onCreateTodo}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default Todolist;

const Container = styled.div`
`;
