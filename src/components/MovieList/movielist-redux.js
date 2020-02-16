import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../actions/getMovies";
import MovieListContainer from "./movielist-container";

class MovieListRedux extends Component {
  render() {
    const { getMovies, popMovies, error } = this.props;
    return (
      <MovieListContainer
        getMovies={getMovies}
        popMovies={popMovies}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({
  popMovies: state.movies.popMovies,
  error: state.error
});

export default connect(mapStateToProps, { getMovies })(MovieListRedux);
