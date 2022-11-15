import React from "react";
import context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const nav = useNavigate();
  const { users, setUsers } = useContext(context);
  const [license, setLicense] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorId, setErrorId] = useState("");

  const initUser = () => {
    if (id.length !== 5) {
      return setErrorId("the number must be with 5 digits");
    }
    if (errorId) {
      setErrorId("");
    }
    const nameInLowerCase = name.toLowerCase();
    if (name.split(" ").length !== 2) {
      return setErrorName("the name must contain minimum 4 characters");
    }
    for (let i = 0; i < nameInLowerCase.length; i++) {
      if (nameInLowerCase[i] === " ") {
        continue;
      }
      if (nameInLowerCase[i] < "a" || nameInLowerCase > "z") {
        return setErrorName("the name must contain minimum 4 characters");
      }
    }

    const [existUser] = users.filter((user) => {
      return user.id === id;
    });
    if (existUser) {
      return alert("already exist");
    }
    setUsers([...users, { name, id, license, visited: 0, products: 0 }]);
    return nav("/");
  };

  return (
    <div>
      <h1>Sign up</h1>
      no.{" "}
      <input
        type={"number"}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <p style={{ color: "red" }}>{errorId}</p>
      <br />
      fullName{" "}
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <p style={{ color: "red" }}>{errorName}</p>
      <br />
      forklift truck <br />
      <div>
        <label>yes</label>
        <input
          type={"radio"}
          value="true"
          name="forklift"
          onClick={(e) => {
            setLicense(true);
          }}
        />
        <label>no</label>
        <input
          defaultChecked
          type={"radio"}
          value="false"
          name="forklift"
          onClick={(e) => {
            setLicense(false);
          }}
        />
      </div>
      <button
        onClick={() => {
          initUser();
        }}
      >
        create
      </button>
    </div>
  );
}
