import React from "react";
import context from "../../context";
import { useContext, useState } from "react";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";

export default function Main() {
  const {
    name,
    setShowMenu,
    tasks,
    tasksToShow,
    setTasks,
    addTask,
    setAddTask,
  } = useContext(context);

  return (
    <div>
      <p> welcome: {name}</p>
      {tasksToShow.map((task, index) => {
        return (
          <Task
            index={index}
            key={index}
            responsibility={task.employee}
            name={task.name}
            completed={task.completed}
            description={task.description}
          />
        );
      })}
      {addTask && <AddTask />}
    </div>
  );
}
