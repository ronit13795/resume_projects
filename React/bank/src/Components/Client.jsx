import React from "react";
import { useContext, useState } from "react";
import context from "../context";
import { useNavigate } from "react-router-dom";

export default function Client() {
  const { users, setUsers, userNowUse, setUserNowUse } = useContext(context);
  const nav = useNavigate();
  const [showAction, setAction] = useState(false);
  const [company, setCompany] = useState("");
  const [spend, setSpend] = useState(0);

  const addPayMent = () => {
    const updatedUsers = users.map((user) => {
      if (user.name === userNowUse.name && user.id === userNowUse.id) {
        let newBalance = user.money - spend;
        return {
          ...user,
          money: newBalance,
          expense: [...user.expense, { company, spend: Number(spend) }],
        };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
    setUserNowUse({
      ...userNowUse,
      expense: [...userNowUse.expense, { company, spend: Number(spend) }],
      money: userNowUse.money - spend,
    });
    setAction(false);
  };
  return (
    <div>
      <button
        onClick={() => {
          return alert(userNowUse.money);
        }}
      >
        balance
      </button>
      <button
        onClick={() => {
          setAction(true);
        }}
      >
        action
      </button>
      <br />
      <button
        onClick={() => {
          setUserNowUse({});
          nav("/");
        }}
      >
        exit
      </button>
      <button
        onClick={() => {
          nav("/Edit");
        }}
      >
        edit
      </button>
      {showAction && (
        <div>
          <input
            onChange={(e) => {
              setSpend(e.target.value);
            }}
            placeholder="money"
            type={"number"}
          />
          <input
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            placeholder="name of company"
            type={"text"}
          />
          <button
            onClick={() => {
              addPayMent();
            }}
          >
            confirm payment
          </button>
        </div>
      )}
    </div>
  );
}
