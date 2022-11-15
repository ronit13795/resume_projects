import React from "react";

import { useNavigate } from "react-router-dom";

export default function Login({ player, setPlayer, setPassword, password }) {
  const nav = useNavigate();

  const validUser = () => {
    if (player.name.length < 2 || player.name.length > 6) {
      alert("not valid name");
      return;
    }
    if (password.indexOf("@") === -1) {
      alert("not valid password ,must include @");
      return;
    }
    nav("/game");
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setPlayer({ ...player, name: e.target.value });
        }}
        placeholder="name"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        type={"password"}
      />
      <button onClick={validUser}>lets play</button>
    </div>
  );
}
