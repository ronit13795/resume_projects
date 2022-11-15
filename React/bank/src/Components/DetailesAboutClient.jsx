import React from "react";
import { useContext, useState } from "react";
import context from "../context";
import { useNavigate } from "react-router-dom";

export default function DetailesAboutClient({
  name,
  id,
  expense,
  index: userIndex,
}) {
  const [showExpense, setShowExpense] = useState(false);
  const nav = useNavigate();
  const { users, setUsers, userNowUse, setUserNowUse } = useContext(context);

  const deleteExpense = (expenseIndex) => {
    const newExpense = users[userIndex].expense.filter((expense, index) => {
      return index !== expenseIndex;
    });
    const updatedUsers = users.map((user, index) => {
      if (userIndex === index) {
        return { ...user, expense: [...newExpense] };
      } else {
        return user;
      }
    });
    setUsers([...updatedUsers]);
  };

  const deleteUser = () => {
    const newUsersAfterDeleted = users.filter((user, index) => {
      return index !== userIndex;
    });
    setUsers([...newUsersAfterDeleted]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <p>
          {id} {name}
        </p>
        <button
          onClick={() => {
            setShowExpense(!showExpense);
          }}
          style={{
            background: "red",
            width: "10px",
            borderRadius: "20px",
            height: "20px",
          }}
        ></button>
      </div>
      {showExpense &&
        expense.map((expense, indexExpense) => {
          return (
            <div key={indexExpense}>
              <p>
                {expense.spend} {expense.company}
              </p>
              <button
                onClick={() => {
                  deleteExpense(indexExpense);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      <button
        onClick={() => {
          deleteUser();
        }}
      >
        Cancel
      </button>
    </div>
  );
}
