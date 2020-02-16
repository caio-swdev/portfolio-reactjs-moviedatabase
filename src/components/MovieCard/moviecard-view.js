import React from "react";
import "./moviecard.scss";
import { truncate } from "../../utils/truncateText";
import CircleProgress from "../CircleProgressBar";

const MovieCardView = props => {
  const { movie } = props;

  return (
    <article className="moviecard">
      <img src={props.src} alt="" className="poster" />
      <div className="content">
        <i className="fas fa-arrow-right"></i>
        <div className="top">
          <CircleProgress
            percentage={movie.vote_average.toFixed(1)}
            sqSize={50}
            strokeWidth={8}
          />

          <div className="meta-data">
            <h1>{truncate(movie.original_title, 6)}</h1>
            <p>{movie.release_date.split("-")[0]}</p>
          </div>
        </div>
        <p className="overview">{truncate(movie.overview, 30) + " . . ."}</p>
        <p className="more-info">More Info</p>
      </div>
    </article>
  );
};

export default MovieCardView;
