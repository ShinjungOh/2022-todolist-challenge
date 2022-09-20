import React from 'react';
import styled from 'styled-components';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TodoItem = () => (
  <Container>
    <Done>
      <FaCheck size="23" />
    </Done>
    <Text>Todo</Text>
    <Delete>
      <FaTrash color="#b79a12" size="23" />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  width: 100%;
  height: 12%;
  background-color: #fff7df;
  padding: 5px 20px 5px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Done = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  border: 1px solid #9d9d9d;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.text`
  font-size: 20px;
  flex: 1 1;
`;

const Delete = styled.text``;
