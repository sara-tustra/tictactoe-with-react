import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';





const LogIn = ({handlePlayer1, handlePlayer2, handleTurn}) => {

    return (
        <div className="logInContainer">
            <h4>CHOOSE YOUR WEAPON</h4>
            <div className="inputLine form-inline">
            <input className="form-control" type="text" placeholder="Player 1 username" onChange={e => handlePlayer1(e.target.value)}/>
            <input className="form-control" type="text" placeholder="Player 2 username" onChange={e => handlePlayer2(e.target.value)}/>
            </div>
            <div className="logoLine">
                <button className="sith" onClick={() => handleTurn("X")}>X</button>
                <button className="jedi" onClick={() => handleTurn("O")}>O</button>
            </div>  
        </div>
    )
    }

    LogIn.propTypes = {
        playTime: PropTypes.func
    }


export default LogIn;
