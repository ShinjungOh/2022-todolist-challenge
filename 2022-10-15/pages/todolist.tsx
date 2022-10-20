import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { TodoCreate, TodoHeader } from '@components/todo';

import { useTodoStores } from '../lib/store/stores';

const Todolist = () => {
  const router = useRouter();
  const { userStore } = useTodoStores();

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
      <TodoHeader />
      <TodoCreate />
    </Container>
  );
};

export default Todolist;

const Container = styled.div`
`;
