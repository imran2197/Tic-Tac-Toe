import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import "../styles/PlayAs.css";
import TicTacToe from "./TicTacToe";

const PlayAs = (props) => {
    const [player, setPlayer] = useState("");
    const playerHandler = (e) => {
        setPlayer(e.target.value);
    }
    console.log(props.playMode);
    return(
        <Router>
            <Switch>
                <Route path="/TicTacToe"><TicTacToe player={player} /></Route>
                <Route path="/PlayAs">
                    <div className="container">
                        <div className="playAs-container">
                            <h1 className="pick">Pick your side</h1>
                            <div className="playAs">
                                <label id="player-X" >X<input type="radio" name="player" value="X" onChange={playerHandler} /></label>
                                <label id="player-O">O<input type="radio" name="player" value="O" onChange={playerHandler} /></label>
                            </div>
                            <Link to="/TicTacToe" id="link"><button className="button" disabled={player===""}>Continue</button></Link>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default PlayAs;