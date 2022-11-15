import React from "react";
import context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Enter() {
  const nav = useNavigate();
  const { setUser, setWorkout } = useContext(context);
  const [showFirstPage, setShowFirstPage] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [showThirdPage, setShowThirdPage] = useState(false);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [workoutInWeek, setWorkoutInWeek] = useState(0);
  const [years, setYears] = useState(0);

  const checkDetails = () => {
    if (id.length !== 9) {
      return alert("id must be with 9 digits");
    }
    if (name.length < 5) {
      return alert("name must be with 5 letters at least");
    }
    const nameArr = name.split(" ");
    if (nameArr.length !== 2) {
      return alert("name must be with 1 space");
    }
    if (gender === "") {
      return alert("must choose gender!");
    }
    setShowFirstPage(false);
    setShowSecondPage(true);
  };

  const renderSelect = (sum, start) => {
    let arr = [];
    for (let i = start; i <= sum; i++) {
      arr.push(i);
    }

    return arr.map((val, index) => {
      return (
        <option key={index} value={val}>
          {val}
        </option>
      );
    });
  };

  const initTrainsAndUser = () => {
    setUser({
      name,
      id,
      gender,
      years: Number(years),
      workoutInWeek: Number(workoutInWeek),
    });
    let workouts = [];
    for (let i = 1; i <= workoutInWeek; i++) {
      if (i === 1) {
        workouts.push({
          numOfWorkout: i,
          km: Number((years * 5) / workoutInWeek),
          done: false,
        });
      } else {
        workouts.push({
          numOfWorkout: i,
          km: (workouts[i - 2].km * 1.15).toFixed(2),
          done: false,
        });
      }
    }
    setWorkout(workouts);
    return nav(`/traning/${name}`);
  };

  return (
    <div>
      <div>
        {showFirstPage && (
          <div>
            <h1>Enter your details</h1>
            <br />
            <input
              placeholder="Enter your id"
              type={"number"}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <br />
            <input
              placeholder="Enter your full name"
              type={"text"}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="">Choose gender</option>
              <option value="male">male</option>
              <option value="female"> female</option>
            </select>
            <button
              onClick={() => {
                checkDetails();
              }}
            >
              next
            </button>
          </div>
        )}

        {showSecondPage && (
          <div>
            <h1>how many workouts a week?</h1>
            <br />
            <select
              onChange={(e) => {
                setWorkoutInWeek(e.target.value);
              }}
            >
              {renderSelect(7, 1)}
            </select>
            <br />
            <h1>how many years have been training?</h1>
            <br />
            <select
              onChange={(e) => {
                setYears(e.target.value);
              }}
            >
              {renderSelect(30, 0)}
            </select>
            <button
              onClick={() => {
                setShowSecondPage(false);
                setShowThirdPage(true);
              }}
            >
              next
            </button>
          </div>
        )}
        {showThirdPage && (
          <div>
            <h1>Ready?</h1>
            <br></br>
            <button
              onClick={() => {
                initTrainsAndUser();
              }}
            >
              yes
            </button>
            <button
              onClick={() => {
                setShowFirstPage(true);
                setShowThirdPage(false);
              }}
            >
              no
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
