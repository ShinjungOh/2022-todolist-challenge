import { createContext, useContext } from 'react';

import userStore from './userStore';

const stores = {
  userStore,
};

const TodoContext = createContext(stores);

export const TodoStoreProvider = ({ children }: any) => (
  <TodoContext.Provider value={stores}>
    {children}
  </TodoContext.Provider>
);

export const useTodoStores = () => useContext(TodoContext);
