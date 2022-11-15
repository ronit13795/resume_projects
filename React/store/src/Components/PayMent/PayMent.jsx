import React from "react";
import { useNavigate } from "react-router-dom";
import context from "../../context";
import { useContext } from "react";

export default function PayMent() {
  const nav = useNavigate();
  const { setCart } = useContext(context);
  return (
    <div>
      <input placeholder="NAME" />
      <input placeholder="LAST NAME" />
      <input
        id="ccn"
        type="tel"
        inputMode="numeric"
        pattern="[0-9\s]{13,19}"
        autocomplete="cc-number"
        maxLength="19"
        placeholder="xxxx xxxx xxxx xxxx"
      ></input>
      <input type={"text"} maxLength={4} required placeholder="validity" />
      <input type={"number"} maxLength={3} placeholder="back of the card" />
      <button
        onClick={() => {
          setCart([]);
          nav("/");
        }}
      >
        payment
      </button>
    </div>
  );
}
