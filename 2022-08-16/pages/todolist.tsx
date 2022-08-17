import React from 'react';

import { TodoHeader } from '@components/todo';

const Todolist = () => {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleString('ko-KR', {
    weekday: 'long',
  });

  return (
    <div>
      <TodoHeader dateString={dateString} dayName={dayName} undoneTaskLength={0} />
    </div>
  );
};

export default Todolist;
