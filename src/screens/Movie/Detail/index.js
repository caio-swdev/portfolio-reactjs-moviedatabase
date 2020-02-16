import React from "react";
import MovieDetail from "../../../components/MovieDetails";
import { Container } from "semantic-ui-react";

import "./moviedetail.scss";

const ScreenMovieDetail = props => {
  return (
    <div className="screen-moviedetail">
      <Container>
        <MovieDetail {...props} />
      </Container>
    </div>
  );
};

export default ScreenMovieDetail;
