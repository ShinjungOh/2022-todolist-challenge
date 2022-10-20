import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

import { useTodoStores } from '../lib/store/stores';
import { TodoItemType } from '../lib/interface/todo.interface';

const Todolist = () => {
  const router = useRouter();
  const { userStore } = useTodoStores();

  const [isOpen, setIsOpen] = useState(false);
  const [createItem, setCreateItem] = useState('');
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const nextId = useRef(0);

  const onToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreateTodo = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setCreateItem(value);
  };

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setTodos((todo) => [
      ...todo,
      {
        id: nextId.current,
        text: createItem,
        done: false,
      },
    ]);
    nextId.current++;
    setCreateItem('');
    setIsOpen(false);
  };

  const onDone = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const unDoneTodoLength = useMemo(() => todos.filter((todo) => !todo.done).length, [todos]);

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
