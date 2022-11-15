import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import context from "./context";
import Entery from "./Components/Entery";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Manager from "./Components/Manager";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProduct] = useState([
    { id: "11122", name: "green box", forklift: false, inPlace: false },
    { id: "22554", name: "green box", forklift: false, inPlace: false },
    { id: "66698", name: "blue box", forklift: true, inPlace: false },
    { id: "78544", name: "red box", forklift: false, inPlace: false },
    { id: "69875", name: "red box", forklift: false, inPlace: false },
  ]);
  const [nowUserUse, setNowUserUse] = useState({});
  return (
    <div className="App">
      <context.Provider
        value={{
          products,
          setProduct,
          users,
          setUsers,
          nowUserUse,
          setNowUserUse,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entery />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route path={"/manager"} element={<Manager />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
