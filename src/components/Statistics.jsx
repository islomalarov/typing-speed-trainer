// src/components/Statistics.js
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Statistics = () => {
  const { wpm, errorCount } = useSelector((state) => state.typing);

  return (
    <StatsContainer>
      <StatItem>
        <strong>WPM:</strong> {wpm}
      </StatItem>
      <StatItem>
        <strong>Errors:</strong> {errorCount}
      </StatItem>
    </StatsContainer>
  );
};

/// Стилизация с использованием медиазапросов для адаптации
const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StatItem = styled.div`
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export default Statistics;
