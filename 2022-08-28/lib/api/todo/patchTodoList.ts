import { client } from '../client';

export const patchTodoList = async ({ id, done }: { id: number, done: boolean }) => {
  try {
    const url = `/api/todo/${id}`;
    await client.patch(url, {
      done,
    });
  } catch (e) {
    throw e;
  }
};
