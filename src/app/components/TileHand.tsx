'use client';

import React, { useEffect } from 'react'
import Tile from './Tile';

interface TileHandProps {
    tiles: React.ReactNode[];
}

const TileHand = (props: TileHandProps) => {
    return (
      <div>
        <div>Tile Hand&nbsp;</div>
        <div className="tile-hand">
          {props.tiles}
        </div>
      </div>
    );
}

export default TileHand