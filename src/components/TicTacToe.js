import React, {useState, useEffect} from 'react';
import '../styles/TicTacToe.css';
import GridRow from './GridRow';
import Header from './Header';
import Footer from './Footer';
import SettingsIcon from '@material-ui/icons/Settings';

const TicTacToe = (props) => {
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(props.player);
  const [boardState, setBoardState] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const playerClick = (i,j) => {
    if(boardState[i][j] === ""){
      const currBoardState = [...boardState];
      currBoardState[i][j] = playerTurn;
      setBoardState(currBoardState);
      setPlayerTurn(playerTurn === "X" ? "O" : "X");
    }
  }

  useEffect(() =>{
    let won = true;
    //check for Rows
    for(let i=0;i<3;i++){
      won = true;
      for(let j=1;j<3;j++){
        if(boardState[i][j] !== boardState[i][j-1]){
          won = false;
          break;
        }
      }
      if(won && boardState[i][0] !== ""){
        return alertWin(boardState[i][0]);
      }
    }

    //check for Columns
    for(let j=0;j<3;j++){
      won = true;
      for(let i=1;i<3;i++){
        if(boardState[i][j] !== boardState[i-1][j]){
          won = false;
          break;
        }
      }
      if(won && boardState[0][j] !== ""){
        return alertWin(boardState[0][j]);
      }
    }

    //check for Diagonals
    won = true;
    for(let i=1;i<3;i++){
      if(boardState[i][i] !== boardState[i-1][i-1]){
        won = false;
        break;
      }
    }
    if(won && boardState[0][0] !== ""){
      return alertWin(boardState[0][0]);
    }

    //check for Anti-Diagonals
    won = true;
    for(let i=1;i<3;i++){
      if(boardState[i][2-i] !== boardState[i-1][2-i+1]){
        won = false;
        break;
      }
    }
    if(won && boardState[2][0] !== ""){
      return alertWin(boardState[2][0]);
    }

    //check for Draw
    let draw = true;
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        if(boardState[i][j] === ""){
          draw = false;
          break;
        }
      }
      if(draw === false){
        break;
      }
    }

    if(draw){
      return alertDraw();
    }
  });

  let alertWin = (playerWon) => {
    if(playerWon === "X"){
      alert("Congratulations! Player-X wins.");
      setCountX(countX+1);
    }else{
      alert("Congratulations! Player-O wins.");
      setCountO(countO+1);
    }
    resetGame();
    setPlayerTurn(props.player);
  }

  let alertDraw = () => {
    alert("Draw!");
    resetGame();
    setPlayerTurn(props.player);
  }

  let resetGame = () => {
    setPlayerTurn("X");
    setBoardState([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  }

  return (
    <>
      <Header xCount={countX} oCount={countO} />
      <div id="container">
          <div id="board">
            {
              boardState.map((boardRow, rowIdx) => (
                <GridRow key={rowIdx} row={boardRow} rowIdx={rowIdx} playerClick={playerClick} />
              ))
            }
          </div>
        </div>
        <Footer turn={playerTurn} />
        <div className="setting">
          <SettingsIcon />
        </div>
    </>
  );
}

export default TicTacToe;
