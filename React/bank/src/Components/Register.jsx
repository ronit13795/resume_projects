import React from "react";
import { useContext, useState } from "react";
import context from "../context";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const { users, setUsers, userNowUse, setUserNowUse } = useContext(context);
  const [id, setId] = useState(userNowUse.id);
  const [name, setName] = useState(userNowUse.name);
  const [password, setPassword] = useState(userNowUse.password);
  const [confirmPassword, setConfirmPassword] = useState(userNowUse.password);
  const [money, setMoney] = useState(userNowUse.money);

  const create = () => {
    if (id.length !== 9) {
      return alert("id must be with 9 digits!");
    }
    if (name.length < 4) {
      return alert("name must be with 4 letters al least");
    }
    if (password.length < 6) {
      return alert("password must be at least with 6 letters");
    }
    if (password !== confirmPassword) {
      return alert("password and confirmed password must be equal");
    }
    if (Number(money) < 0 || Number(money) > 1000000 || !money) {
      return alert("money must be between 0 to 1,000,000");
    }
    if (!userNowUse.name) {
      setUsers([
        ...users,
        { name, id, password, money: Number(money), expense: [] },
      ]);
      return nav("/");
    }
    const updatedUsers = users.map((user) => {
      if (user.name === name && user.id === id) {
        return { ...users, name, id, password, money };
      } else {
        return user;
      }
    });
    setUsers([...updatedUsers]);
    return nav(`/${name}`);
  };

  return (
    <div>
      <h1>register</h1>

      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="id"
        type={"number"}
        value={id}
      />
      <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="full name"
        type={"text"}
        value={name}
      />
      <br />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        type={"text"}
        value={password}
      />
      <br />
      <input
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        placeholder="confirm password"
        type={"text"}
        value={confirmPassword}
      />
      <br />
      <input
        onChange={(e) => {
          setMoney(e.target.value);
        }}
        placeholder="money"
        type={"number"}
        value={money}
      />
      <br />
      <button
        onClick={() => {
          create();
        }}
      >
        create
      </button>
    </div>
  );
}
