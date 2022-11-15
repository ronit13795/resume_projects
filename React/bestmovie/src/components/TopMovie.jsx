import React from "react";
import context from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function TopMovie({ name, color, index }) {
  const { movies, setMovies, movieToShow, setMoviesToShow } =
    useContext(context);
  return <div style={{ backgroundColor: `${color}` }}>{name}</div>;
}
