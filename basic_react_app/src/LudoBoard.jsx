import { useState } from "react";
const LudoBoard = () => {
  let [moves, setMoves] = useState({ Blue: 0, Yellow: 0, Green: 0, Red: 0 });

  /* let [blue, setBlue] = useState(Blue);
     let [yellow, setYellow] = useState(Yellow);
     let [green, setGreen] = useState(Green);
     let [red, setRed] = useState(Red); */

  const handleBlue = () => {
    moves.Blue = moves.Blue + 1;
    /* console.log(moves.Blue);
    setMoves(moves); */
    setMoves({ ...moves });
  };
  const handleYellow = () => {
    moves.Yellow = moves.Yellow + 1;
    setMoves({ ...moves });
  };
  const handleGreen = () => {
    moves.Green = moves.Green + 1;
    setMoves({ ...moves });
  };
  const handleRed = () => {
    moves.Red = moves.Red + 1;
    setMoves({ ...moves });
  };
  return (
    <div>
      <p>Game begins</p>
      <div className="board">
        <p>Blue moves : {moves.Blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={handleBlue}>
          +1
        </button>
        <p>Yellow moves : {moves.Yellow} </p>
        <button style={{ backgroundColor: "yellow" }} onClick={handleYellow}>
          +1
        </button>
        <p>Green moves : {moves.Green}</p>
        <button style={{ backgroundColor: "green" }} onClick={handleGreen}>
          +1
        </button>
        <p>Red moves : {moves.Red}</p>
        <button style={{ backgroundColor: "red" }} onClick={handleRed}>
          +1
        </button>
      </div>
    </div>
  );
};

export default LudoBoard;
