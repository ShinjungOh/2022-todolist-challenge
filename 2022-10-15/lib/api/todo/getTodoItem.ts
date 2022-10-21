import { client } from '../client';
import { TodoItemType } from '../../interface/todo.interface';

export const getTodoItem = async (): Promise<TodoItemType[]> => {
  const url = '/api/v2/todo';
  const userToken = localStorage.getItem('token');
  const headers = {
    authorization: `Bearer ${userToken}`,
  };
  const response = await client.get(url, { headers });
  return response.data.data;
};
