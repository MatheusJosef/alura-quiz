import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProgressBar = styled.div`
  display: flex;
  width: 100%;
  height: 12px;
  border-radius: 5px;
  overflow: hidden;
  border: 4px solid transparent;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 15px;
`;

ProgressBar.Content = styled(motion.div)`
  display: flex;
  background-color: #cd3;
  transform: skew(-24deg);
  margin: -5px;
`;

const QuizProgressBar = ({ total, fill }) => {
  const percentage = Math.ceil((fill / total) * 100);
  const percentageFill = `${percentage === 100 ? 110 : percentage}%`;

  const variants = {
    empty: { width: 0 },
    fill: { width: percentageFill },
  };

  return (
    <ProgressBar>
      <ProgressBar.Content
        initial="empty"
        animate="fill"
        transition={{ duration: 1.5 }}
        variants={variants}
      />
    </ProgressBar>
  );
};

export default QuizProgressBar;
