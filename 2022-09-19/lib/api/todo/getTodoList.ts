import { client } from '../client';
// eslint-disable-next-line import/no-cycle
import { TodoItemType } from '../../../pages/todolist';

export const getTodoList = async (): Promise<TodoItemType[]> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const url = '/api/todo';
    const result = await client.get(url);
    return result.data;
  } catch (e) {
    throw e;
  }
};
