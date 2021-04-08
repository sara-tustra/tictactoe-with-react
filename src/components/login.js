import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';




const LogIn = props => {

    return (
        <div className="logInContainer">
            <h4>CHOOSE YOUR WEAPON</h4>
            <div className="inputLine form-inline">
            <input className="form-control" type="text" name="username1" placeholder="Player 1 username"/>
            <input className="form-control" type="text" name="username2" placeholder="Player 2 username"/>
            </div>
            <div className="logoLine">
                <button className="sith" onClick={props.playTime} value="sith"><i className="fab fa-sith" value="sith"></i></button>
                <button className="jedi" onClick={props.playTime} value="jedi"><i className="fas fa-jedi" value="jedi"></i></button>
            </div>  
        </div>
    )
    }

    LogIn.propTypes = {
        playTime: PropTypes.func
    }


export default LogIn;
