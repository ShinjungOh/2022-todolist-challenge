import React, {
  useEffect, useMemo,
} from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';

import { TodoCreate, TodoHeader, TodoList } from '@components/todo';

import { useTodoStores } from '../lib/store/stores';

const Todolist = () => {
  const router = useRouter();
  const { userStore, todoStore } = useTodoStores();

  const onToggleOpen = () => {
    todoStore.onToggle();
  };

  const onCreateTodo = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    todoStore.onCreate(value);
  };

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await todoStore.onSubmitTodo(todoStore.createItem);
    todoStore.createItem = '';
    todoStore.onToggle(false);
  };

  const onClickDone = async (id: number, done: boolean) => {
    await todoStore.onDone(id, done);
  };

  const onClickDelete = async (id: number) => {
    await todoStore.onDelete(id);
  };

  const unDoneTodoLength = useMemo(() => todoStore.todos.filter((todo) => !todo.done).length, [todoStore.todos]);

  useEffect(() => {
    (async () => {
      const isAuth = await userStore.getAuthUser();
      if (!isAuth) {
        alert('회원 정보가 없습니다.');
        router.replace('/auth/signin');
      }
    })();
  }, []);

  useEffect(() => {
    todoStore.getTodo();
  }, []);

  return (
    <>
      <TodoHeader
        unDoneTodoLength={unDoneTodoLength}
      />
      <TodoList
        todos={todoStore.todos}
        onDone={onClickDone}
        onDelete={onClickDelete}
      />
      <TodoCreate
        isOpen={todoStore.isOpen}
        value={todoStore.createItem}
        onToggle={onToggleOpen}
        onCreate={onCreateTodo}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default observer(Todolist);
