import { client } from '../client';

const postTodoItem = async (text: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const url = '/api/todo';
    await client.post(url, {
      text,
    });
  } catch (e) {
    throw e;
  }
};

export default postTodoItem;
