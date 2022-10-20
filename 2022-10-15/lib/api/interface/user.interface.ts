export interface User {
  email: string;
  id?: string;
  token?: string;
}

export interface UserParam {
  email: string;
  password: string;
  passwordCheck?: string;
}
