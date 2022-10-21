import { createContext, useContext } from 'react';

import userStore from './userStore';
import todoStore from './todoStore';

const stores = {
  userStore,
  todoStore,
};

const TodoContext = createContext(stores);

export const TodoStoreProvider = ({ children }: any) => (
  <TodoContext.Provider value={stores}>
    {children}
  </TodoContext.Provider>
);

export const useTodoStores = () => useContext(TodoContext);
