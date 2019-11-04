import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS, randomTetromino } from '../tetrominos';

interface ICell {
  type: 0 | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';
}

const Cell: React.FC<ICell> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    cell
  </StyledCell>
);

export default Cell;
