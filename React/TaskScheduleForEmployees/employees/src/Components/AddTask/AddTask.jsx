import React from "react";
import { useState, useContext } from "react";
import context from "../../context";

export default function AddTask() {
  const { tasks, tasksToShow, setTasks, tasksToDo, setAddTask } =
    useContext(context);
  const [name, setName] = useState("");
  const [employee, setEmployee] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    const newTask = { employee, description, name, completed: false };
    console.log(newTask, "new task");
    tasks.push(newTask);
    console.log(tasks, "tasks after add task");
    setTasks([...tasksToDo()]);
    setAddTask(false);
  };
  return (
    <div>
      <h1>יצירת משימה חדשה</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="שם המשימה"
      />
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="תיאור המשימה"
      />
      <input
        onChange={(e) => {
          setEmployee(e.target.value);
        }}
        placeholder="מבצע המשימה"
      />
      <button onClick={addTask}>צור</button>
    </div>
  );
}
