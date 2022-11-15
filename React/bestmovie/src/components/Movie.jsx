import React from "react";
import context from "../context";
import { useContext } from "react";

export default function Movie() {
  const { movies, setMovies, movieToShow, setMoviesToShow } =
    useContext(context);

  const addRank = (num) => {
    const moviesCopy = [...movies];
    const movie = {
      ...movieToShow,
      points: [...movieToShow.points, num],
      average: (
        [...movieToShow.points, num].reduce((a, b) => {
          return a + b;
        }, 0) /
          movieToShow.points.length +
        1
      ).toFixed(2),
    };

    const othersMovie = moviesCopy.filter((movie) => {
      return movie.name != movieToShow.name;
    });
    const newMovies = [...othersMovie, movie].sort((movieA, movieB) => {
      if (movieA.name < movieB.name) {
        return -1;
      }
      if (movieA.name > movieB.name) {
        return 1;
      }
      if (movieA.name == movieB.name) {
        return 0;
      }
    });
    setMovies(newMovies);
    setMoviesToShow({ ...movie });
  };
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: `${movieToShow.background}`,
      }}
    >
      <h1>Movie name: {movieToShow.name}</h1>
      <br />
      <br />
      <p>description: {movieToShow.desc}</p>
      <br />
      <p>{movieToShow.average}</p>
      <div>
        <button
          onClick={() => {
            addRank(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            addRank(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            addRank(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            addRank(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            addRank(5);
          }}
        >
          5
        </button>
      </div>
    </div>
  );
}
