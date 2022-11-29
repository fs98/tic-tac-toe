import React from "react";
import { Square } from "./Square";

export const Board = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 bg-rose-500 rounded-2xl">
      {squares.map((square, i) => (
        <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};
