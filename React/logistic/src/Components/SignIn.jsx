import React from "react";
import context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";

export default function SignIn() {
  const [id, setId] = useState("");
  const nav = useNavigate();
  const { users, setUsers, nowUserUse, setNowUserUse } = useContext(context);
  const [showList, setShowList] = useState(false);
  const [showSign, setShowSign] = useState(true);

  const checkUser = () => {
    if (id === "99999") {
      return nav("/manager");
    }
    const [existUser] = users.filter((user) => {
      return user.id === id;
    });
    if (!existUser) {
      return alert(` user with id : ${id} not exist`);
    }
    setNowUserUse({ ...existUser, visited: existUser.visited + 1 });
    const otherUsers = users.filter((user) => {
      return user.id !== id;
    });

    setUsers([...otherUsers, { ...existUser, visited: existUser.visited + 1 }]);
    setShowList(true);
    setShowSign(false);
  };
  return (
    <div>
      {showSign && (
        <div>
          <h1>log in</h1>
          <br />
          no.
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              checkUser();
            }}
          >
            Enter
          </button>
        </div>
      )}
      {showList && <List />}
    </div>
  );
}
