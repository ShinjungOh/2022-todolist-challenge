import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaTrash } from 'react-icons/fa';

const TodoItem = () => (
  <Container>
    <Done>
      <FaCheck size={24} />
    </Done>
    <Text>텍스트를 입력</Text>
    <Delete>
      <FaTrash size={18} />
    </Delete>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
`;

const Done = styled.div`
  width: 38px;
  height: 38px;
  border: 1px solid grey;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  padding-left: 18px;
  font-size: 20px;
  flex: 1 1;
`;

const Delete = styled.div`
  cursor: pointer;
`;
