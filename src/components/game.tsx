import Square from "./square";

interface GameProps {
  player1: string;
  player2: string;
  turn: string;
  turns: Array<number | null>;
  play: (turn: string, index: number) => void;
  startsOver: () => void;
  status: string;
}

const Game: React.FC<GameProps> = ({
  player1,
  player2,
  turn,
  turns,
  play,
  status,
  startsOver,
}) => {
  const renderPlay = (index: number) => {
    return <Square turn={turns[index]} onClick={() => play(turn, index)} />;
  };

  return (
    <div>
      <h4>Player1: {player1}</h4>
      <h4>Player2: {player2}</h4>
      <h5>{status}</h5>

      <button type="button" onClick={startsOver}>
        Start over
      </button>

      <table className="table-auto">
        <tbody>
          <tr>
            <td>{renderPlay(0)}</td>
            <td>{renderPlay(1)}</td>
            <td>{renderPlay(2)}</td>
          </tr>
          <tr>
            <td>{renderPlay(3)}</td>
            <td>{renderPlay(4)}</td>
            <td>{renderPlay(5)}</td>
          </tr>
          <tr>
            <td>{renderPlay(6)}</td>
            <td>{renderPlay(7)}</td>
            <td>{renderPlay(8)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Game;
