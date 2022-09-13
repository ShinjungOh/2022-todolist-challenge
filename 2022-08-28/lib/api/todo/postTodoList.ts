import { client } from '../client';

export const postTodoList = async ({ text }: { text: string }) => {
  try {
    const url = '/api/todo';
    const result = await client.post(url, {
      text,
    });
  } catch (e) {
    throw e;
  }
};
