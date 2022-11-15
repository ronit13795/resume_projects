import React from "react";
import context from "../context";
import { useContext } from "react";
import TopMovie from "./TopMovie";

export default function BestMovie() {
  const { movies, setMovies } = useContext(context);
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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {[copyMovie[0], copyMovie[1], copyMovie[2]].map((movie) => {
        return <TopMovie name={movie.name} color={movie.background} />;
      })}
    </div>
  );
}
