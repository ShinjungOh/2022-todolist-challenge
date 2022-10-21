import { observable } from 'mobx';

import { TodoItemType } from '../interface/todo.interface';
import { deleteTodoItem } from '../api/todo/deleteTodoItem';
import { getTodoItem } from '../api/todo/getTodoItem';
import { patchTodoItem } from '../api/todo/patchTodoItem';
import { postTodoItem } from '../api/todo/postTodoItem';

export interface Store {
  isOpen: boolean;
  todos: TodoItemType[];
  createItem: string;
  onToggle: (open?: boolean) => void;
  onCreate: (value: string) => void;
  onSubmitTodo: (text: string) => Promise<void>;
  onDone: (id: number, done: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  getTodo: () => Promise<void>;
}

export const store: Store = {
  isOpen: false,
  todos: [],
  createItem: '',

  onToggle(open?: boolean) {
    if (open === undefined) {
      this.isOpen = !this.isOpen;
      return;
    }
    this.isOpen = open;
  },

  onCreate(value: string) {
    this.createItem = value;
  },

  async onSubmitTodo(text: string) {
    try {
      await postTodoItem(text);
      await this.getTodo();
    } catch (e) {
      alert('제출 오류가 발생했습니다.');
    }
  },

  async onDone(id: number, done: boolean) {
    try {
      await patchTodoItem(id, { done });
      await this.getTodo();
    } catch (e) {
      alert('할 일 완료 오류가 발생했습니다.');
    }
  },

  async onDelete(id: number) {
    try {
      await deleteTodoItem(id);
      await this.getTodo();
    } catch (e) {
      alert('삭제 오류가 발생했습니다.');
    }
  },

  async getTodo() {
    try {
      const response = await getTodoItem();
      this.todos = response;
    } catch (e: any) {
      alert('불러오는 중 오류가 발생했습니다.');
      this.todos = [];
    }
  },
};

export default observable.object(store);
