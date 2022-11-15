import React from "react";
import { useNavigate } from "react-router-dom";

export default function Result({ player }) {
  const nav = useNavigate();
  return (
    <div>
      Result:
      <p>wins:{player.wins}</p>
      <p>lose: {player.lose}</p>
      <button
        onClick={() => {
          nav("/game");
        }}
      >
        lets play again
      </button>
    </div>
  );
}
