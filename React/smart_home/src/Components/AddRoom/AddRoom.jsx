import React from "react";
import context from "../../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";

export default function AddRoom() {
  const { rooms, setRooms } = useContext(context);
  const [type, setType] = useState("");
  const [color, setColor] = useState("white");
  const [roomName, setRoomName] = useState("");

  const nav = useNavigate();

  const addroom = () => {
    if (roomName.length < 5) {
      const newRoom = { name: roomName, type, color, id: uniqid() };
      setRooms([...rooms, newRoom]);
    } else {
      alert("room name must have up to 5 characters ");
    }
    nav("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <select
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="">pick new room</option>
        <option value="bed Room">bed room</option>
        <option value="bathroom"> bathroom</option>
        <option value="kitchen">kitchen</option>
      </select>
      <input
        onChange={(e) => {
          setRoomName(e.target.value);
        }}
        placeholder="room name"
      ></input>
      <input
        onChange={(e) => {
          setColor(e.target.value);
        }}
        placeholder="room color"
      ></input>
      <button onClick={addroom}>create</button>
    </div>
  );
}
