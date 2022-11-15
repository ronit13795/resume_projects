import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import context from "./context";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Data from "./Components/Data.jsx";
import Help from "./Components/Help";

function App() {
  const emergency = [
    { name: "אמבולנס", symbol: "A", tel: "101" },
    { name: "משטרה", symbol: "B", tel: "100" },
    { name: "כיבוי והצלה", symbol: "c", tel: "102" },
  ];
  const [nowEmergency, setNowEmergency] = useState(emergency[0]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  return (
    <div className="App">
      <context.Provider
        value={{ nowEmergency, setNowEmergency, user, setUser, emergency }}
      >
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path={"/:name"} element={<Data />}></Route>
            <Route path={"/100"} element={<Help />}></Route>
            <Route path={"/101"} element={<Help />}></Route>
            <Route path={"/102"} element={<Help />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
