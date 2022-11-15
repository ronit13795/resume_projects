import React from "react";
import context from "../context";
import { useContext, useState } from "react";

export default function Workout() {
  const { user, setUser, workout, setWorkout } = useContext(context);
  const [nowTrain, setNowTrain] = useState(workout[0]);
  const [showTrain, setShowTrain] = useState(false);
  const [showHomePage, setShoeHomePage] = useState(true);
  const searchFirstTrainToDO = () => {
    const [firstTrainToDo] = workout.filter((train) => {
      return !train.done;
    });
    if (firstTrainToDo) {
      setNowTrain({ ...firstTrainToDo });
      setShowTrain(true);
      setShoeHomePage(false);
    }
  };
  const doneTrain = () => {
    const copyTrains = [...workout];
    copyTrains.splice(nowTrain.numOfWorkout - 1, 1, {
      ...nowTrain,
      done: true,
    });

    const allDoneTrains = copyTrains.filter((train) => {
      return train.done;
    });
    if (allDoneTrains.length === copyTrains.length) {
      const initTrains = copyTrains.map((train, index) => {
        return { ...train, done: false, km: train.km * 1.15 };
      });
      setWorkout(initTrains);
      setShoeHomePage(true);
      setShowTrain(false);
    } else {
      setWorkout([...copyTrains]);
      setShoeHomePage(true);
      setShowTrain(false);
    }
  };
  return (
    <div>
      {showHomePage && (
        <div>
          <h1>welcome trainer</h1>
          <button
            onClick={() => {
              searchFirstTrainToDO();
            }}
          >
            start
          </button>
          {workout.map((train, index) => {
            const color = train.done ? "white" : "grey";
            return (
              <div
                onClick={() => {
                  if (!train.done) {
                    setNowTrain(train);
                    setShoeHomePage(false);
                    setShowTrain(true);
                  }
                }}
                style={{ backgroundColor: color, border: "1px solid black" }}
              >
                <p>workout :{train.numOfWorkout}</p>
                <p>{train.km} km</p>
              </div>
            );
          })}
        </div>
      )}

      {showTrain && (
        <div>
          <p>workout :{nowTrain.numOfWorkout}</p>
          <p>{nowTrain.km} km</p>
          <button
            onClick={() => {
              doneTrain();
            }}
          >
            success
          </button>
          <button
            onClick={() => {
              setShowTrain(false);
              setShoeHomePage(true);
            }}
          >
            failure
          </button>
        </div>
      )}
    </div>
  );
}
