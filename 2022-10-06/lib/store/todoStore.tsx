import { observable } from 'mobx';

// eslint-disable-next-line import/no-cycle
import { TodoItemType } from '../../pages/todolist';
// eslint-disable-next-line import/no-cycle
import { getTodoItem } from '../api/todo/getTodoItem';
import { deleteTodoItem } from '../api/todo/deleteTodoItem';
import { patchTodoItem } from '../api/todo/patchTodoItem';
import { postTodoItem } from '../api/todo/postTodoItem';

export interface Store {
  todos: TodoItemType[];
  getTodo: () => Promise<void>;
  onSubmit: (text: string) => Promise<void>;
  onDone: (id: number, done: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export const store: Store = {
  todos: [],
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
