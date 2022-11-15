import React from "react";
import context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Help() {
  const { user, setUser, nowEmergency, setNowEmergency, emergency } =
    useContext(context);
  const [showInputs, setShowInputs] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tries, setTries] = useState(0);
  const nav = useNavigate();

  const checkPassword = () => {
    setTries(tries + 1);
    if (tries + 1 > 2) {
      return setShowInputs(false);
    }

    if (password === user.password && confirmPassword === user.password) {
      setTries(0);
      return nav(`/${user.name}`);
    }
  };
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        {" "}
        <p>
          {nowEmergency.name} {nowEmergency.tel}
        </p>
        <br />
        <p>{user.name}</p>
      </div>
      <br />
      <button
        onClick={() => {
          if (tries < 3) {
            setShowInputs(true);
          }
        }}
      >
        ביטול
      </button>
      {showInputs && (
        <div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="סיסמה"
          />
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="סיסמה"
          />
          <button
            onClick={() => {
              checkPassword();
            }}
          >
            ביטול
          </button>
        </div>
      )}
    </div>
  );
}
