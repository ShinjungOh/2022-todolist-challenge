import client from '../client';

const patchTodoItem = async (id: number, done: boolean) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const url = `/api/todo/${id}`;
    await client.patch(url, {
      done,
    });
  } catch (e) {
    throw e;
  }
};

export default patchTodoItem;
