import React from "react";
import MovieList from "../../../components/MovieList";

const ScreensMovieList = props => {
  return (
    <div className="screen-movielist">
      <h1>Latest Movies</h1>
      <MovieList {...props} />
    </div>
  );
};

export default ScreensMovieList;
