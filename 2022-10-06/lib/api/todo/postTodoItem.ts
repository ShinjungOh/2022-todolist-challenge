import { client } from '../client';

export const postTodoItem = async (text: string) => {
  const url = '/api/todo';
  await client.post(url, {
    text,
  });
};
