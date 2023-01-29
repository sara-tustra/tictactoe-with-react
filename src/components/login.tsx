interface LogInProps {
  handlePlayer1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlayer2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTurn: (value: string) => void;
}

const LogIn: React.FC<LogInProps> = ({
  handlePlayer1,
  handlePlayer2,
  handleTurn,
}) => {
  return (
    <div>
      <h4> CHOOSE YOUR WEAPON</h4>
      <div>
        <input
          type="text"
          name="P
          player1"
          placeholder="Player1 username"
          onChange={(e) => handlePlayer1(e)}
        />
        <input
          type="text"
          name="player2"
          placeholder="player2 username"
          onChange={(e) => handlePlayer2(e)}
        />
      </div>
      <div>
        <button
          className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          onClick={() => handleTurn("X")}
        >
          X
        </button>
        <button
          className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
          onClick={() => handleTurn("O")}
        >
          O
        </button>
      </div>
    </div>
  );
};

export default LogIn;
