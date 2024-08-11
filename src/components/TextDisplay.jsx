import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TextDisplay = () => {
  const { text, userInput } = useSelector((state) => state.typing);

  const renderText = () => {
    return text.split('').map((char, index) => {
      const isCorrect = userInput[index] === char;
      const hasTyped = index < userInput.length;

      return (
        <StyledChar key={index} className={!hasTyped ? '' : isCorrect ? 'correct' : 'incorrect'}>
          {char}
        </StyledChar>
      );
    });
  };

  return <TextContainer>{renderText()}</TextContainer>;
};

// Стилизация с использованием медиазапросов для адаптации
const TextContainer = styled.div`
  font-size: 24px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const StyledChar = styled.span`
  &.correct {
    color: green;
  }

  &.incorrect {
    color: red;
  }
`;

export default TextDisplay;
