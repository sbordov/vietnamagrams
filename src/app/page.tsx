'use client';

import Image from 'next/image'
import Board from './components/Board'
import './styles.css'
import TileHand from './components/TileHand'
import { useEffect } from 'react'
import React from 'react'
import Tile from './components/Tile'

export default function Home() {
  const [tileHandSize, setTileHandSize] = React.useState(21); // Assuming you might want to change this dynamically

    // set a property that can be referenced in CSS to create grid  
    useEffect(() => {
      // Update the CSS variable whenever tile hand size changes
      document.documentElement.style.setProperty('--tile-hand-size', tileHandSize.toString());
    }, [tileHandSize]); // Include gridSize in the dependency array

    const createGrid = () => {
      let tileHandSquares: JSX.Element[] = [];
      for (let i = 0; i < tileHandSize; i++) {
          tileHandSquares.push(<Tile letter={'a'}/>);
      }
      return tileHandSquares;
    };
    
  return (
    <main>
      <h1>Chơi đi <b>Việt Nam-agrams</b></h1>
      <Board/>
      <div>&nbsp;</div>
      <TileHand tiles={createGrid()}/>
    </main>
  )
}
