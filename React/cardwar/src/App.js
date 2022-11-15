import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useState } from "react";
import Game from "./Components/Game/Game";
import Result from "./Components/Result/Result";

function App() {
  const [player, setPlayer] = useState({ name: "", wins: 0, lose: 0 });
  const [password, setPassword] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setPlayer={setPlayer}
                player={player}
                setPassword={setPassword}
                password={password}
              />
            }
          ></Route>
          <Route
            path="/game"
            element={
              <Game name={player.name} setPlayer={setPlayer} player={player} />
            }
          ></Route>
          <Route path="/result" element={<Result player={player} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
