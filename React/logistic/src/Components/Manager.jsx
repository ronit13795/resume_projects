import React from "react";
import context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Manager() {
  const nav = useNavigate();
  const { users, setUsers } = useContext(context);

  const results = () => {
    return users.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.visited}</td>
          <td>{user.products}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1> Manager</h1>
      <table style={{ border: "1px solid black" }}>
        <tbody>
          <tr>
            <th>no</th>
            <th>full name</th>
            <th>counter</th>
            <th>number of products</th>
          </tr>
          {results()}
        </tbody>
      </table>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        log out
      </button>
    </div>
  );
}
