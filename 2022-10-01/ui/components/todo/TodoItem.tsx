import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaTrash } from 'react-icons/all';

const TodoItem = () => (
  <Container>
    <Done>
      <FaCheck size={20} color="grey" />
    </Done>
    <Text>text</Text>
    <Delete>
      <FaTrash size={20} color="grey" />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  width: 100%;
  height: 8%;
  padding: 25px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Done = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid grey;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  margin-left: 15px;
  flex: 1 1;
`;

const Delete = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
