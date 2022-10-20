import { observable } from 'mobx';

import { SignInUser } from '../api/user/SignInUser';
import { SignUpUser } from '../api/user/SignUpUser';
import { AuthUser } from '../api/user/AuthUser';
import { User, UserParam } from '../interface/user.interface';

export interface Store {
  user?: User;
  signIn: UserParam;
  signUp: UserParam;
  onChangeSignIn: (name: string, value: string) => void;
  onChangeSignUp: (name: string, value: string) => void;
  clearSignInUser: () => void;
  clearSignUpUser: () => void;
  signinUser: () => Promise<boolean>;
  signupUser: () => Promise<boolean>;
  getAuthUser: () => Promise<boolean>;
}

const initialUserParam = {
  email: '',
  password: '',
};

export const store: Store = {
  user: undefined,
  signIn: initialUserParam,
  signUp: {
    ...initialUserParam,
    passwordCheck: '',
  },

  onChangeSignIn(name, value) {
    this.signIn = {
      ...this.signIn,
      [name]: value,
    };
  },

  onChangeSignUp(name, value) {
    // console.log('onChangeSignUp', name, value, this.signUp);
    this.signUp = {
      ...this.signUp,
      [name]: value,
    };
    // this.signUp[name as keyof UserParam] = value;
    // this.signUp[name as 'email' | 'password' | 'passwordCheck'] = value;
    console.log('next >>', this.signUp);
  },

  clearSignInUser() {
    this.signIn = initialUserParam;
  },

  clearSignUpUser() {
    this.signUp = {
      ...initialUserParam,
      passwordCheck: '',
    };
  },

  async signinUser() {
    try {
      const param = {
        email: this.signIn.email,
        password: this.signIn.password,
      };
      const response = await SignInUser(param);
      const userData: User = response.data.data;
      this.user = {
        email: userData.email,
      };
      localStorage.setItem('token', userData.token as string);
      return true;
    } catch (e) {
      console.log(e);
      alert('회원 정보가 올바르지 않아요.');
      return false;
    }
  },

  async signupUser() {
    try {
      const param = {
        email: this.signUp.email,
        password: this.signUp.password,
      };
      const response = await SignUpUser(param);
      console.log(response);
      const userData: User = response.data.data;
      this.user = {
        email: userData.email,
      };
      localStorage.setItem('token', userData.token as string);
      return true;
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.msg);
      return false;
    }
  },

  async getAuthUser() {
    try {
      const response = await AuthUser();
      const userData: User = response.data.data.user;
      this.user = {
        email: userData.email,
      };
      return true;
    } catch (e) {
      return false;
    }
  },
};

export default observable.object(store);
