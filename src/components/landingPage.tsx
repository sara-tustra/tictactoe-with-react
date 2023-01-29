import { useState } from "react";
import Game from "./game";
import LogIn from "./login";

interface LandingPageProps {
  title: string;
}

interface IGameProps {
  player1: string;
  player2: string;
  turn: string;
  turns: Array<number | null>;
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  const [state, setState] = useState<IGameProps>({
    player1: "",
    player2: "",
    turn: "",
    turns: Array(9).fill(null),
  });

  const handlePlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleTurn = (value: string) => {
    setState({
      ...state,
      turn: value,
    });
  };

  const play = (turn: string, index: number) => {
    if (whoWon(state.turns) !== null) return;

    let { turns } = state;
    if (turns[index]) return;
    turns[index] = turn;

    setState({
      ...state,
      turns,
      turn: state.turn === "X" ? "O" : "X",
    });
  };
  const startOver = () => {
    setState({
      player1: "",
      player2: "",
      turn: "",
      turns: Array(9).fill(null),
    });
  };
  let status: string;

  const winner = whoWon(state.turns);
  status = winner ? `Winner is ${winner}` : `Your turn, ${state.turn}`;

  return (
    <div>
      <h1>
        <strong>{props.title}</strong>
      </h1>
      {state.player1 !== "" && state.player2 !== "" && state.turn !== "" ? (
        <Game
          player1={state.player1}
          player2={state.player2}
          turn={state.turn}
          turns={state.turns}
          play={play}
          status={status}
          startsOver={startOver}
        />
      ) : (
        <LogIn
          handlePlayer1={handlePlayer}
          handlePlayer2={handlePlayer}
          handleTurn={handleTurn}
        />
      )}
    </div>
  );
};

const whoWon = (currentBoard: Array<number | null>) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (
      currentBoard[a] &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[b] === currentBoard[c]
    )
      return currentBoard[a];
  }
  return null;
};

export default LandingPage;
