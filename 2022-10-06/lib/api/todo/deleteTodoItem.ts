import { client } from '../client';

export const deleteTodoItem = async (id: number) => {
  const url = `/api/todo/${id}`;
  await client.delete(url);
};
