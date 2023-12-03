import React from 'react';
import Tile from './Tile';

interface SquareProps {
    row: number;
    col: number;
    tile?: React.ReactNode;
}

const Square = (props: SquareProps) => {
  return <div className="square">{props.tile}</div>;
};

export default Square;
