import React from "react";
import context from "../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Enter() {
  const nav = useNavigate();
  const { setName, setShowMenu } = useContext(context);
  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="enter your name"
      />
      <input type={"password"} placeholder="enter your password" />

      <button
        onClick={() => {
          setShowMenu(true);
          nav("/main");
        }}
      >
        enter
      </button>
    </div>
  );
}
