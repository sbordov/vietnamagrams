import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import React from 'react'

interface BoardSizeSelectorProps {
    setColumnWidth: (newColumnCount: number) => void,
    setRowHeight: (newRowCount: number) => void,
}

const BoardSizeSelector = (props: BoardSizeSelectorProps) => {
  return (
    <div>
        <h2>Grid row count:</h2>
        <NumberInput defaultValue={30} min={1} max={80} onChange={(_, newNumber) => props.setRowHeight(newNumber)}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <h2>Grid column count:</h2>
        <NumberInput defaultValue={30} min={1} max={80} onChange={(_, newNumber) => props.setColumnWidth(newNumber)}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    </div>
  )
}

export default BoardSizeSelector