import React from 'react';
import "../styles/GridItem.css";

const GridItem = (props) => { 
    const clickFn = () => {
        props.playerClick(props.rowIdx, props.colIdx)
    }
    return(
        <>
            <div className={`grid-item ${props.value}`} onClick={clickFn} >
                <div className={`value ${props.value}`}>{props.value}</div>
            </div>
        </>
    )
}

export default GridItem;