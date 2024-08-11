import React from 'react';
import styled from 'styled-components';

// Компонент для отображения текста
const TextDisplay = ({ text, userInput }) => {
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

// Стилизация с помощью styled-components
const TextContainer = styled.div`
  font-size: 24px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
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
