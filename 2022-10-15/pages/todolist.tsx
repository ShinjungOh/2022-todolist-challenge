import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
      todolist
    </Container>
  );
};

export default Todolist;

const Container = styled.div`
  background-color: green
`;
