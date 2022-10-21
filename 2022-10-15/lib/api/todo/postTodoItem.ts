import { client } from '../client';

export const postTodoItem = async (text: string) => {
  const url = '/api/v2/todo';
  const userToken = localStorage.getItem('token');
  const headers = {
    authorization: `Bearer ${userToken}`,
  };
  const param = {
    text,
  };
  await client.post(url, param, { headers });
};
