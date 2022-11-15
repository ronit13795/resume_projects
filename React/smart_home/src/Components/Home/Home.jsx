import React from "react";
import { Link } from "react-router-dom";
import Room from "../Room/Room";
import context from "../../context";
import { useContext } from "react";

export default function Home() {
  const { rooms } = useContext(context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {rooms.map((room, index) => {
          return (
            <Room
              key={index}
              index={index}
              id={room.id}
              color={room.color}
              type={room.type}
              name={room.name}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to={"/addroom"}>
          <button
            style={{
              borderRadius: "50%",
              backgroundColor: "blue",
            }}
          >
            +
          </button>
        </Link>
      </div>
    </div>
  );
}
