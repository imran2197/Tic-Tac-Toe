import React from 'react'
import "../styles/TicTacToe.css";

const Header = (props) => {
    return(
        <>
            <div class="header">
                <div className="players">
                <p className="player-X">X</p>
                <h1 id="score">{`${props.xCount} : ${props.oCount}`}</h1>
                <p className="player-O">O</p>
                </div>
            </div>
        </>
    )
}

export default Header;