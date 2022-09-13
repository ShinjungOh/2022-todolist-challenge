import { client } from '../client';
// eslint-disable-next-line import/no-cycle
import { TodoItemType } from '../../../pages/todolist';

export const getTodoList = async (): Promise<TodoItemType[]> => {
  try {
    const url = '/api/todo';
    const result = await client.get(url);
    return result.data.data;
  } catch (e) {
    throw e;
  }
};
