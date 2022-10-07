import { createContext, useContext } from 'react';

import todoStore from './todoStore';

const stores = {
  todoStore,
};

const TodoContext = createContext(stores);

export const TodoStoreProvider = ({ children }: any) => (
  <TodoContext.Provider value={stores}>
    {children}
  </TodoContext.Provider>
);

export const useTodoStores = () => useContext(TodoContext);
