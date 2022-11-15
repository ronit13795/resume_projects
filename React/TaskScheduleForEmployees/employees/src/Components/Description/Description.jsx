import React from "react";
import context from "../../context";
import { useContext } from "react";

export default function Description({
  description,
  name,
  showDetails,
  setShowDetails,
  index,
}) {
  const {
    tasks,
    name: user,
    setTasks,
    tasksToDo,
    tasksToShow,
  } = useContext(context);

  const endTask = () => {
    if (user !== tasksToShow[index].employee) {
      console.log(user, tasksToShow[index].employee);
      return alert("The task is not yours and there is no permission");
    }
    tasks.forEach((task) => {
      if (task.name === name && task.description === description) {
        task.completed = true;
      }
    });

    setTasks([...tasksToDo()]);
  };
  return (
    <div style={{ backgroundColor: "grey" }}>
      <button
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        x
      </button>
      <p>שם המשימה</p>
      <p>{name}</p>
      <p>תיאור המשימה</p>
      <p>{description}</p>
      <button
        onClick={() => {
          endTask();
        }}
      >
        סיים משימה
      </button>
    </div>
  );
}
