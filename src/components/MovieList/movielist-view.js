import React from "react";
import { Link, withRouter } from "react-router-dom";
import MovieCard from "../MovieCard";
import "./movielist.scss";

const MovieList = props => {
  return (
    <div className="movielist">
      {props.movies.map((rowItems, index) => (
        <MovieRow key={index} rowItems={rowItems} />
      ))}
    </div>
  );
};

const MovieLink = props => (
  <Link to={`${props.movie.id}`}>
    <MovieCard
      to={`${props.movie.id}`}
      src={`http://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
      movie={props.movie}
    />
  </Link>
);
const MovieRow = props => (
  <div className="movierow">
    {props.rowItems.map((movie, index) => (
      <MovieLink key={index} movie={movie} />
    ))}
  </div>
);

export default withRouter(MovieList);
