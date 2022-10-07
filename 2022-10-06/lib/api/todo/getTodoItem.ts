import { TodoItemType } from 'lib/interface/todo.interface';

import { client } from '../client';

export const getTodoItem = async (): Promise<TodoItemType[]> => {
  const url = '/api/todo';
  const result = await client.get(url);
  return result.data.data;
};
