import React, { useState } from "react";
import { Square } from "./Square";

export const Board = ({ onClick }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
  };

  console.log(squares);
  return (
    <div className="grid grid-cols-3 bg-rose-500 rounded-2xl">
      {squares.map((square, i) => (
        <Square key={i} value={squares[i]} handleClick={() => handleClick(i)} />
      ))}
    </div>
  );
};
