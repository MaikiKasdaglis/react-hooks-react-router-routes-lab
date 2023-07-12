import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard";

function Movies() {
  console.log(movies)
  return (
  <div>
    <fieldset>
    <legend>
      <h1>Movies Page</h1>
    </legend>
      {movies.map((movie) => <MovieCard key={movie.name} movie={movie}/>)}
      </fieldset>
    </div>
    );
}

export default Movies;
