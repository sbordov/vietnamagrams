import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import styles from './ChakraBoard.module.css'

interface ChakraBoardProps {
    rowCount: number,
    columnCount: number,
}

const ChakraBoard = (props: ChakraBoardProps) => {
  const gridItems = [];
  for (let i = 0; i < props.rowCount * props.columnCount; i++) {
    gridItems.push(<GridItem w='5' h='5' columnGap={1} rowGap={1} bg='blue.500'></GridItem>)
  }

  const gridRows = [];
  for (let i = 0; i < props.rowCount; i++) {
    const columnsInRow = [];
    for (let j = 0; j < props.columnCount; j++) {
        columnsInRow.push(<Box bg='blue.500' h='20px' w='20px' border='1px solid'></Box>);
    }
    gridRows.push(<div></div>)
  }

  const gridSquares = [];
  for (let i = 0; i < props.rowCount * props.columnCount; i++) {
    gridSquares.push(<Box bg='blue.500' h='20px' w='20px' border='1px solid'></Box>)
  }

  return (
    <div>
        {/* <Grid templateColumns={`repeat(${props.columnCount}, 1fr)`} rowGap={1} columnGap={1} gridArea='100px'>
            {gridItems}
        </Grid> */}
        <SimpleGrid className={styles.grid} columns={props.columnCount} spacingY={'1px'} spacingX={'1px'}>
            {gridSquares}
        </SimpleGrid>
  </div>
  )
}

export default ChakraBoard