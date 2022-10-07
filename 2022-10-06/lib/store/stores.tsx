import { createContext, useContext } from 'react';

const stores = {

};

const TodoContext = createContext(stores);

export const TodoStoreProvider = ({ children }: any) => (
  <TodoContext.Provider value={stores}>
    {children}
  </TodoContext.Provider>
);

export const useTodoStores = () => useContext(TodoContext);
