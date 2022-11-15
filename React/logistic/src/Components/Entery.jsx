import React from "react";
import { useNavigate } from "react-router-dom";

export default function Entery() {
  const nav = useNavigate();
  return (
    <div style={{ backgroundColor: "gray", minHeight: "100vh" }}>
      <h2>Logistic Management</h2>
      <br />
      <button
        onClick={() => {
          nav("/signUp");
        }}
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "30px",
          border: "0px",
        }}
      >
        sign up
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          nav("/signIn");
        }}
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "30px",
          border: "0px",
        }}
      >
        sign in
      </button>
    </div>
  );
}
