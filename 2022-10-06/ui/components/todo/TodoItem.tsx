import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

const TodoItem = () => (
  <Container>
    <Done>
      <FaCheck size={20} />
    </Done>
    <Text>text</Text>
    <Delete>
      <FaTrash size={17} />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  width: 100%;
  height: 13%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Done = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid grey;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  padding-left: 20px;
  font-size: 19px;
  font-weight: normal;
  flex: 1;
`;

const Delete = styled.div`
  cursor: pointer;
`;
