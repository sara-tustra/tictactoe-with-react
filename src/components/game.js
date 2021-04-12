import React, { useState } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./board.css";

import Cuadro from "./square";


const Game = ({player1, player2, turn, turns, play, status, startOver}) => {


  const renderJugada = (index) => {
    return (
      <Cuadro turn={turns[index]} onClick={() => play(turn, index)} />
    );
  };




  return (
    <div className="boardContainer">
      <h4 className="m-2">Player1: {player1}</h4>
      <h4 className="m-2">Player2: {player2}</h4>
      <h5 className="m-2">{status}</h5>
      
      <button
        type="button"
        className="btn btn-secondary btn-sm m-4"
        onClick={startOver}
      >
        Start Over
      </button>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

// funcion que calcule el ganador



Game.propTypes = {
  startOver: PropTypes.func,
};

export default Game;
