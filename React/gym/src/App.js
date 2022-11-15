import context from "./context";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Enter from "./Components/Enter";
import Workout from "./Components/Workout";

function App() {
  const [user, setUser] = useState({});
  const [workout, setWorkout] = useState([]);
  return (
    <div className="App">
      <context.Provider value={{ user, setUser, workout, setWorkout }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Enter />}></Route>
            <Route path="/traning/:name" element={<Workout />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
