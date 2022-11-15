import React from "react";
import context from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieDescription({ name, color, index }) {
  const nav = useNavigate();
  const { movies, setMovies, movieToShow, setMoviesToShow } =
    useContext(context);
  return (
    <div
      onClick={() => {
        setMoviesToShow(movies[index]);
        nav(`/${name}`);
      }}
      style={{ backgroundColor: `${color}` }}
    >
      {name}
    </div>
  );
}
