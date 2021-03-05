import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import "../styles/PlayMode.css";
import SettingsIcon from '@material-ui/icons/Settings';
import PlayAs from '../components/PlayAs';

const PlayMode = () => {
    return(
        <>
            <Router>
                <Switch>
                <Route path="/PlayAs"><PlayAs /></Route>
                    <Route path="/">
                        <div className="container">
                            <div className="board">
                                <div className="players">
                                    <p className="player-X">X</p>
                                    <p className="player-O">O</p>
                                </div>
                                <h3 className="mode-text">Choose your play mode</h3>
                                <Link to="/PlayAs" id="link"><button className="button">With AI</button></Link>
                                <Link to="/PlayAs" id="link"><button className="button">With a friend</button></Link>
                                <div className="setting">
                                    <SettingsIcon />
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default PlayMode;