import React from "react";
import { useContext, useState } from "react";
import context from "../context";
import { useNavigate } from "react-router-dom";
import DetailesAboutClient from "./DetailesAboutClient";

export default function Admin() {
  const { users, setUsers, userNowUse, setUserNowUse } = useContext(context);
  const nav = useNavigate();
  return (
    <div>
      <h1>Manager</h1>
      {users.map((user, index) => {
        return (
          <DetailesAboutClient
            name={user.name}
            expense={user.expense}
            id={user.id}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}
