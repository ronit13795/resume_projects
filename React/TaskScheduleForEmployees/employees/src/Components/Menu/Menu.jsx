import React from "react";
import "./Menu.css";
import context from "../../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ setAddTask }) {
  const nav = useNavigate();
  const { setName, name, setShowMenu, tasks, tasksToShow, setTasks } =
    useContext(context);

  const allTasks = () => {
    const myTask = tasks.filter((task) => {
      return !task.completed;
    });
    setTasks(myTask);
  };

  const myTasks = () => {
    const myTask = tasks.filter((task) => {
      return task.employee === name && !task.completed;
    });
    setTasks(myTask);
  };

  const history = () => {
    const myTask = tasks.filter((task) => {
      return task.completed;
    });
    setTasks([...myTask]);
  };

  const exit = () => {
    setShowMenu(false);
    setName("");
    nav("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
      }}
    >
      <button onClick={allTasks}>כל המשימות</button>
      <button onClick={myTasks}>המשימות שלי </button>
      <button
        onClick={() => {
          setAddTask(true);
        }}
      >
        {" "}
        משימה חדשה
      </button>
      <button onClick={history}>היסטוריה </button>
      <button onClick={exit}>יציאה </button>
    </div>
  );
}
