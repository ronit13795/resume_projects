import React from "react";
import context from "../context";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const { user, setUser } = useContext(context);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user.name && user.password) {
      return nav(`/${user.name}`);
    }
  }, []);

  const validateName = (name) => {
    let includeNums = 0;
    for (let i = 0; i < 10; i++) {
      if (name.includes(`${i}`)) {
        includeNums++;
      }
    }
    if (!includeNums && name.length > 4) {
      return true;
    } else {
      return false;
    }
  };
  const validatePassword = (password) => {
    let countLetters = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "a" && password[i] <= "z") {
        countLetters++;
      }
      if (password[i] >= "A" && password[i] <= "Z") {
        countLetters++;
      }
    }
    let countNumsInPaasword = 0;

    for (let i = 0; i < 10; i++) {
      if (password.includes(`${i}`)) {
        countNumsInPaasword++;
      }
    }

    if (countLetters && countNumsInPaasword && password.length === 8) {
      return true;
    } else {
      return false;
    }
  };

  if (name.length || password.length) {
    const validName = validateName(name);
    const validPassword = validatePassword(password);
    console.log(validName, validPassword);

    if ((!validName || !validPassword) && !error) {
      setError(true);
    }

    if (validName && validPassword) {
      setUser({ name, password });
      localStorage.setItem("user", JSON.stringify({ name, password }));
      return nav(`/${name}`);
    }
  }

  return (
    <div>
      <h1>הרשמה</h1>
      {error && <p>name or password is incorrect</p>}
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="שם מלא"
      />

      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="סיסמה "
      />
    </div>
  );
}
