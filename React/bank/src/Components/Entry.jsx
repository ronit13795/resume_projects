import React from "react";
import { useContext, useState } from "react";
import context from "../context";
import { useNavigate } from "react-router-dom";

export default function Entry() {
  const nav = useNavigate();
  const { users, setUsers, userNowUse, setUserNowUse } = useContext(context);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (password === "ADMIN" && name === "ADMIN") {
      return nav("/Admin");
    }
    const existUser = users.filter((user) => {
      return user.name === name && user.password === password;
    });

    if (existUser.length === 0) {
      return alert("not exist");
    }
    setUserNowUse({ ...existUser[0] });
    return nav(`/${name}`);
  };
  return (
    <div>
      <h1>sv-bank</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="userName"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        type={"password"}
      />
      <p
        onClick={() => {
          nav("/register");
        }}
      >
        create new user
      </p>
      <button
        onClick={() => {
          login();
        }}
      >
        Enter
      </button>
    </div>
  );
}
