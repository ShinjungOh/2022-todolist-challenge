import { client } from '../client';
import { UserParam } from '../../interface/user.interface';

export const SignUpUser = async (param: UserParam) => {
  const url = '/api/user/signup';
  const response = await client.post(url, param);
  return response;
};
