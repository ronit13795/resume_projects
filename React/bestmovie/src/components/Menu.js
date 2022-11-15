import React from "react";
import context from "../context";
import { useContext } from "react";
import MovieDescription from "./MovieDescription";

export default function Menu() {
  const { movies, setMovies } = useContext(context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10%",
        justifyContent: "right",
        float: "right",
        margin: "10px",
      }}
    >
      all movies
      {movies.map((movie, index) => {
        return (
          <MovieDescription
            name={movie.name}
            color={movie.background}
            index={index}
          />
        );
      })}
    </div>
  );
}
