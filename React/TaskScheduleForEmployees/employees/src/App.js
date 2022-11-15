import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import context from "./context";
import Enter from "./Components/Enter/Enter";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";

const tasks = [
  {
    employee: "ronit",
    description: "add button for move to another page",
    name: "button",
    completed: false,
  },
  {
    employee: "dan",
    description: "add img for move to another page",
    name: "img",
    completed: false,
  },
  {
    employee: "david",
    description: "add input for move to another page",
    name: "input",
    completed: true,
  },
];
function App() {
  const tasksToDo = () => {
    console.log(tasks, "tasks");
    const tasksToDo = tasks.filter((task) => {
      return !task.completed;
    });
    return tasksToDo;
  };
  const [name, setName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [tasksToShow, setTasks] = useState(tasksToDo());
  const [addTask, setAddTask] = useState(false);
  return (
    <div>
      <context.Provider
        value={{
          setName,
          setShowMenu,
          tasks,
          tasksToShow,
          setTasks,
          name,
          tasksToDo,
          addTask,
          setAddTask,
        }}
      >
        <BrowserRouter>
          {showMenu && <Menu setAddTask={setAddTask} />}
          <Routes>
            <Route path="/" element={<Enter />}></Route>
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
