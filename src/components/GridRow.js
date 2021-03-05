import React from 'react';
import GridItem from './GridItem';
import "../styles/GridRow.css";

const GridRow = (props) => {
    return(
        <>
            <div className="grid-row">
                {
                    props.row.map((boardCell, colIdx) => (
                        <GridItem key={colIdx} value={boardCell} colIdx={colIdx} rowIdx={props.rowIdx} playerClick={props.playerClick} />
                    ))
                }
            </div>
        </>
    )
}

export default GridRow;