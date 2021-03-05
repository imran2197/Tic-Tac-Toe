import React from 'react';

const Footer = (props) => {
    const getText = (playerTurn) => {
        if(playerTurn === "X"){
            return "Player-X Turn";
        }
        if(playerTurn === "O"){
            return "Player-O Turn";
        }
    }
    return(
        <>
            <div className="turn">
                <h1>{getText(props.turn)}</h1>
            </div>
        </>
    )
}

export default Footer;