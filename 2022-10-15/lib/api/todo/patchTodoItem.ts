import { client } from '../client';

export const patchTodoItem = async (id: number, done: boolean) => {
  const url = `/api/v2/todo/${id}`;
  const userToken = localStorage.getItem('token');
  const headers = {
    authorization: `Bearer ${userToken}`,
  };
  await client.patch(url, {
    done,
  }, { headers });
};
