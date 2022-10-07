import { observable } from 'mobx';

import { TodoItemType } from 'lib/interface/todo.interface';

import { getTodoItem } from '../api/todo/getTodoItem';
import { deleteTodoItem } from '../api/todo/deleteTodoItem';
import { patchTodoItem } from '../api/todo/patchTodoItem';
import { postTodoItem } from '../api/todo/postTodoItem';

export interface Store {
  todos: TodoItemType[];
  isOpen: boolean;
  createTodo: string;
  onToggle: (open?: boolean) => void;
  getTodo: () => Promise<void>;
  onCreate: (value: string) => void;
  onSubmit: (text: string) => Promise<void>;
  onDone: (id: number, done: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export const store: Store = {
  todos: [],
  isOpen: false,
  createTodo: '',
  onToggle(open?: boolean) {
    if (open === undefined) {
      this.isOpen = !this.isOpen;
      // undefined 일 경우에는 여기서 끝나야 한다.
      return;
    }
    this.isOpen = open;
  },
  onCreate(value: string) {
    this.createTodo = value;
  },
  async getTodo() {
    try {
      const result = await getTodoItem();
      this.todos = result;
    } catch (e) {
      alert('오류 발생!');
      this.todos = [];
    }
  },
  async onSubmit(text: string) {
    try {
      await postTodoItem(text);
      await this.getTodo();
    } catch (e) {
      alert('오류 발생!');
    }
  },
  async onDone(id: number, done: boolean) {
    try {
      await patchTodoItem(id, done);
      await this.getTodo();
    } catch (e) {
      alert('오류 발생!');
    }
  },
  async onDelete(id: number) {
    try {
      await deleteTodoItem(id);
      await this.getTodo();
    } catch (e) {
      alert('오류 발생!');
    }
  },
};

export default observable.object(store);
