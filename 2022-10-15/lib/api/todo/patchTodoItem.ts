import { client } from '../client';

interface IParams {
  done: boolean;
}

export const patchTodoItem = async (id: number, params: IParams) => {
  const url = `/api/v2/todo/${id}`;
  const userToken = localStorage.getItem('token');
  const headers = {
    authorization: `Bearer ${userToken}`,
  };
  await client.patch(url, params, { headers });
};
