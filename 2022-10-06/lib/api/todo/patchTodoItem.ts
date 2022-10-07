import { client } from '../client';

export const patchTodoItem = async (id: number, done: boolean) => {
  const url = `/api/todo/${id}`;
  await client.patch(url, {
    done,
  });
};
