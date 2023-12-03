'use client';

import React, { useEffect } from 'react';
import Square from './Square';
import Tile from './Tile';

const Board = () => {
  const [gridSize, setGridSize] = React.useState(20); // Assuming you might want to change this dynamically

  // set a property that can be referenced in CSS to create grid  
  useEffect(() => {
    // Update the CSS variable whenever gridSize changes
    document.documentElement.style.setProperty('--grid-size', gridSize.toString());
  }, [gridSize]); // Include gridSize in the dependency array


  const createGrid = () => {
    let squares: JSX.Element[] = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        squares.push(<Square tile={<Tile letter={'a'} />} key={`${i}-${j}`} row={i} col={j}/>);
      }
    }
    return squares;
  };

  return (
    <div className="board">
      {createGrid()}
    </div>
  );
};

export default Board;
