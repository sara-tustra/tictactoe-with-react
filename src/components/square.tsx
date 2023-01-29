interface SquareProps {
  turn: number;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ turn, onClick }) => {
  return (
    <button id="button" onClick={onClick}>
      {turn}
    </button>
  );
};

export default Square;
