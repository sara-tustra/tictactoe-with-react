import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import { Jedi, Sith } from './weapons';




const LogIn = ({handlePlayer1, handlePlayer2, handleTurn}) => {

    return (
        <div className="logInContainer">
            <h4>CHOOSE YOUR WEAPON</h4>
            <div className="inputLine form-inline">
            <input className="form-control" type="text" placeholder="Player 1 username" onChange={e => handlePlayer1(e.target.value)}/>
            <input className="form-control" type="text" placeholder="Player 2 username" onChange={e => handlePlayer2(e.target.value)}/>
            </div>
            <div className="logoLine">
                <button className="sith" onClick={() => handleTurn(<Sith/>)}><i className="fab fa-sith" ></i></button>
                <button className="jedi" onClick={() => handleTurn(<Jedi/>)}><i className="fas fa-jedi" ></i></button>
            </div>  
        </div>
    )
    }

    LogIn.propTypes = {
        playTime: PropTypes.func
    }


export default LogIn;
