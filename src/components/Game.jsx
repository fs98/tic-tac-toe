import React from "react";
import { Board } from "./Board";

const squares = Array(9).fill(null);
const status = "Next player is X";
const moves = ["1"];

export const Game = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-rose-50 to-rose-200">
      <h1 className="mb-3 font-bold text-2xl">
        Tic <span className="text-rose-500">Tac</span> Toe
      </h1>
      <Board squares={squares} />
      <div className="text-center px-10">
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
      <button className="px-4 py-2 rounded-lg font-bold bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500">
        New Game
      </button>
    </section>
  );
};
