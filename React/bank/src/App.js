import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import context from "./context";
import Entry from "./Components/Entry";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import Client from "./Components/Client";

function App() {
  const [users, setUsers] = useState([]);
  const [userNowUse, setUserNowUse] = useState({});
  return (
    <div className="App">
      <context.Provider value={{ users, setUsers, userNowUse, setUserNowUse }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />}></Route>
            <Route path={"/register"} element={<Register />}></Route>
            <Route path={"/Admin"} element={<Admin />}></Route>
            <Route path={"/:name"} element={<Client />}></Route>
            <Route path={"/Edit"} element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
