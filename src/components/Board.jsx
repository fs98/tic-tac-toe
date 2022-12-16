import React, { useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    if (!squares.includes(null)) {
      status = "It's a draw!";
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleStartNewGame = () => {
    if (
      window.confirm(
        "Are you sure you want to start a new game? You will lose your progress."
      )
    ) {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 bg-rose-500 rounded-2xl">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={squares[i]}
            handleClick={() => handleClick(i)}
          />
        ))}
      </div>
      <div className="text-center px-10 mt-2">
        <p>{status}</p>
      </div>
      <button
        onClick={handleStartNewGame}
        className="px-4 py-2 mt-5 rounded-lg font-bold bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500"
      >
        New Game
      </button>
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
