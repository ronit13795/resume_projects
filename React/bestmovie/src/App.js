import "./App.css";
import context from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu";
import BestMovie from "./components/BestMovie";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([
    {
      name: "A",
      desc: "love story",
      background: "yellow",
      points: [1, 2, 3, 4, 5],
      average: 3,
    },
    {
      name: "B",
      desc: "drama",
      background: "red",
      points: [2, 4, 6, 8, 10],
      average: 6,
    },
    {
      name: "C",
      desc: "documentary",
      background: "blue",
      points: [1, 3, 5, 7, 9],
      average: 5,
    },
    {
      name: "D",
      desc: " horror",
      background: "pink",
      points: [1, 4, 7, 10, 13],
      average: 7,
    },
    {
      name: "E",
      desc: "criminal",
      background: "green",
      points: [1, 1, 1, 1, 1],
      average: 1,
    },
  ]);
  const copyMovie = [...movies];
  const sortedMovies = copyMovie.sort((movieA, movieB) => {
    if (movieA.average > movieB.average) {
      return -1;
    }
    if (movieA.average < movieB.average) {
      return 1;
    }
    if (movieA.average == movieB.average) {
      return 0;
    }
  });
  const [movieToShow, setMoviesToShow] = useState(copyMovie[0]);
  return (
    <div className="App">
      <h1>Bm</h1>
      <context.Provider
        value={{ movies, setMovies, movieToShow, setMoviesToShow }}
      >
        <BestMovie />
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Movie />}></Route>
            <Route path="/:movie" element={<Movie />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
