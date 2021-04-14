import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import LogIn from "./login";
import Game from "./game";

const LandingPage = (props) => {
  const [state, setState] = useState({
    player1: "",
    player2: "",
    turn: "",
    turns: Array(9).fill(null),
  });

  const handlePlayer1 = (name) => {
    setState({
      ...state,
      player1: name,
    });
  };

  const handlePlayer2 = (name) => {
    setState({
      ...state,
      player2: name,
    });
  };

  const handleTurn = (value) => {
    setState({
      ...state,
      turn: value,
    });
  };

  const play = (turn, index) => {
    
    if(quienGano(state.turns) !== null) return

    let { turns } = state;
    if(turns[index]) return;
    turns[index] = turn;
    setState({
      ...state,
      turns,
      turn: state.turn === "X" ? "O" : "X",
    }) 
    
  };

  const startOver = () => {
    setState({
      player1: "",
      player2: "",
      turn: "",
      turns: Array(9).fill(null),
    });
  };

  let status;
  const winner = quienGano(state.turns);
  status = winner ? `Winner is ${winner}` : `Your turn, ${state.turn}`;

  return (
    <div className="landingPage">
      <h1 className="m-4">
        <strong>{props.titulo}</strong>
      </h1>
      {state.player1 !== "" && state.player2 !== "" && state.turn !== "" ? (
        <Game
          player1={state.player1}
          player2={state.player2}
          turn={state.turn}
          turns={state.turns}
          play={play}
          status={status}
          startOver={startOver}
        />
      ) : (
        <LogIn
          handlePlayer1={handlePlayer1}
          handlePlayer2={handlePlayer2}
          handleTurn={handleTurn}
        />
      )}
    </div>
  );
};

const quienGano = (tableroActual) => {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //loop y chequear si los valores coinciden
  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    const [a, b, c] = combinacionesGanadoras[i];
    if (
      tableroActual[a] &&
      tableroActual[a] === tableroActual[b] &&
      tableroActual[b] === tableroActual[c]
    ) {
      return tableroActual[a];
    }
  }
  // devolver ganador o nada

  return null;
};

LandingPage.propTypes = {
  titulo: PropTypes.string,
};

export default LandingPage;
