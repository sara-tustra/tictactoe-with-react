import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import LogIn from './login';
import Game from './game';
import { Jedi, Sith } from './weapons';





const LandingPage = (props) => {
    const [state, setState] = useState({
        player1: '',
        player2: '',
        turn: '',
        turns: (Array(9).fill(null))
    })

    const handlePlayer1 = name => {
        setState({
            ...state,
            player1 : name
        })
    }

    const handlePlayer2 = name => {
        setState({
            ...state,
            player2 : name
        })
    }
   
    const handleTurn = value => {
        setState({
            ...state,
            turn : value
        })
    }

    const play = (turn, index) =>{
        let {turns} = state;
        turns[index] = turn;
        setState({
            ...state,
            turns,
            turn: state.turn === <Jedi/> ? <Sith/> : <Jedi/>
        })
    }

    return (
        <div className="landingPage">
            <h1 className="m-4"><strong>{props.titulo}</strong></h1>
            {
                state.player1 !== '' && state.player2 !== '' && state.turn !== '' ? 
                (
                    <Game
                    player1={state.player1}
                    player2={state.player2}
                    turn={state.turn}
                    turns={state.turns}
                    play={play}/>
                ) : (
                    <LogIn 
                    handlePlayer1={handlePlayer1}
                    handlePlayer2={handlePlayer2}
                    handleTurn={handleTurn}/>
                )
            }
        </div>
    )
}

LandingPage.propTypes = {
    titulo: PropTypes.string,

}

export default LandingPage;
