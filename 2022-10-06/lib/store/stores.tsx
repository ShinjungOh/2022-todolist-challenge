import { createContext, useContext } from 'react';

// eslint-disable-next-line import/no-cycle
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
