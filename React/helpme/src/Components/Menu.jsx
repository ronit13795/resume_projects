import React from "react";
import context from "../context";
import { useContext, useState } from "react";

export default function Menu() {
  const { user, setUser, nowEmergency, setNowEmergency, emergency } =
    useContext(context);
  const [shoeMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>{nowEmergency.symbol}</p>
        <p>{nowEmergency.tel}</p>
        <button
          onClick={() => {
            setShowMenu(!shoeMenu);
          }}
        >
          ---
        </button>
      </div>
      <br />
      {shoeMenu && (
        <div style={{ float: "right", border: "1px solid black" }}>
          {emergency.map((company, index) => {
            const color = nowEmergency.name === company.name ? "white" : "gray";
            return (
              <div
                key={index}
                style={{ backgroundColor: `${color}` }}
                onClick={() => {
                  setNowEmergency(emergency[index]);
                  setShowMenu(false);
                }}
              >
                {company.symbol} <h1>{company.tel}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
