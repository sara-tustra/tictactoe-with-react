import React, { useState } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./board.css";

import Cuadro from "./square";


const Game = ({player1, player2, turn, turns, play}) => {


  const renderJugada = (index) => {
    return (
      <Cuadro turn={turns[index]} onClick={() => play(turn, index)} />
    );
  };

  // let status;
  // const winner = quienGano(tablero);
  // status = winner
  //   ? `${winner} has prevailed!`
  //   : `It is ${
  //       turnodeJedi
  //         ? "Jedi's turn (May The Force Be With You)"
  //         : "Sith's turn (Peace is a lie, there is only passion)"
  //     }`;

  return (
    <div className="boardContainer">
      <h4 className="m-2">Player1: {player1}</h4>
      <h4 className="m-2">Player2: {player2}</h4>
      <button
        type="button"
        className="btn btn-secondary btn-sm m-4"
        // onClick={props.startOver}
      >
        Start Over
      </button>
      <table>
        <tr className="row1">
          <td className="column1 diagonal1">{renderJugada(0)}</td>
          <td className="column2">{renderJugada(1)}</td>
          <td className="column3 diagonal2">{renderJugada(2)}</td>
        </tr>
        <tr className="row2">
          <td className="column1">{renderJugada(3)}</td>
          <td className="column2 diagonal1 diagonal2">{renderJugada(4)}</td>
          <td className="column3">{renderJugada(5)}</td>
        </tr>
        <tr className="row3">
          <td className="column1 diagonal2">{renderJugada(6)}</td>
          <td className="column2">{renderJugada(7)}</td>
          <td className="column3 diagonal1">{renderJugada(8)}</td>
        </tr>
      </table>
    </div>
  );
};

// funcion que calcule el ganador
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

Game.propTypes = {
  startOver: PropTypes.func,
};

export default Game;
