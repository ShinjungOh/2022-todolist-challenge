import { client } from '../client';

const deleteTodoItem = async (id: number) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const url = `/api/todo/${id}`;
    await client.delete(url);
  } catch (e) {
    throw e;
  }
};

export default deleteTodoItem;
