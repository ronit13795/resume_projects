import React from "react";
import context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Data() {
  const { user, setUser, nowEmergency, setNowEmergency, emergency } =
    useContext(context);
  const nav = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          nav(`/${nowEmergency.tel}`);
        }}
        style={{ backgroundColor: "red", color: "white" }}
      >
        הצילו
      </button>
      <br />
      <h1>help me</h1>
    </div>
  );
}
