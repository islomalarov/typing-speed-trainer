import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInput, restart } from '../store/store';

const TextInput = () => {
  const userInput = useSelector((state) => state.typing.userInput);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateUserInput(e.target.value));
  };

  const handleRestart = () => {
    dispatch(restart());
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing here..."
        autoFocus
      />
      <RestartButton onClick={handleRestart}>Restart</RestartButton>
    </InputContainer>
  );
};

// Стилизация с использованием медиазапросов для адаптации
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledInput = styled.input`
  font-size: 24px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 400px;
  max-width: 90%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const RestartButton = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 15px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export default TextInput;
