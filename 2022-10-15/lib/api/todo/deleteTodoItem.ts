import { client } from '../client';

export const deleteTodoItem = async (id: number) => {
  const url = `/api/v2/todo/${id}`;
  const userToken = localStorage.getItem('token');
  const headers = {
    authorization: `Bearer ${userToken}`,
  };
  await client.delete(url, { headers });
};
