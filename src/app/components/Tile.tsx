import React from 'react'

interface TileProps {
    letter: string;
}

const Tile = (props: TileProps) => {
  return (
    <div className="tile">
        {props.letter}
    </div>
  )
}

export default Tile