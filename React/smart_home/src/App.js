import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import context from "./context";
import Home from "./Components/Home/Home";
import AddRoom from "./Components/AddRoom/AddRoom";
import RoomDetails from "./Components/RoomDetails/RoomDetails";

function App() {
  const [rooms, setRooms] = useState([]);
  const [products, setProducts] = useState({});
  const [selectedRoom, setSelectedRoom] = useState({});
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>smart house</h1>
      <context.Provider
        value={{
          rooms,
          setRooms,
          products,
          setProducts,
          selectedRoom,
          setSelectedRoom,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addroom" element={<AddRoom />}></Route>
            <Route path="/room:name" element={<RoomDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
