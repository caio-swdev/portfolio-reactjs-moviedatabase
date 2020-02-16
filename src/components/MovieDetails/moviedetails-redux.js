import React, { Component } from "react";
import { connect } from "react-redux";
import { getCredits } from "../../actions/getCredits";
import { getMovie } from "../../actions/getMovie";
import MovieDetailsContainer from "./moviedetails-container";

class MovieDetailsRedux extends Component {
  render() {
    const { getCredits, getMovie, popMovies, cast, movie } = this.props;
    return (
      <MovieDetailsContainer
        getCredits={getCredits}
        getMovie={getMovie}
        popMovies={popMovies}
        cast={cast}
        movie={movie}
      />
    );
  }
}

const mapStateToProps = state => ({
  popMovies: state.movies.popMovies,
  cast: state.credits.cast,
  movie: state.movie
});

export default connect(mapStateToProps, { getCredits, getMovie })(
  MovieDetailsRedux
);
