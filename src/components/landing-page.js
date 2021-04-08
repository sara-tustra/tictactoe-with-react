import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import LogIn from './login';
import Game from './game';





const LandingPage = (props) => {
    //identifica el cambio de login a board
    const [play, setPlay] = useState({
        show: false
    })

   

    return (
        <div className="landingPage">
            <h1 className="m-4"><strong>{props.titulo}</strong></h1>
            {
                play.show ? (
                    <Game 
                    startOver={() => {
                        setPlay( {
                            show: false
                        })
                    }}/>
                ) : (
                    <LogIn
                        playTime={() => {
                            setPlay({
                                show: true
                            })
                        }} 
                    />
                )
            }
        </div>
    )
}

LandingPage.propTypes = {
    titulo: PropTypes.string,

}

export default LandingPage;


