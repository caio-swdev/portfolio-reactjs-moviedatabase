import React, { Component } from "react";
import MovieList from "./movielist-view";
import { Dimmer, Loader } from "semantic-ui-react";

class MovieListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], width: window.innerWidth };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.setState({ movies: this.movieRows() });
  }
  componentDidMount() {
    this.props.getMovies();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.popMovies !== this.props.popMovies) {
      this.setState({ movies: this.movieRows() });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  movieRows() {
    if (!this.props.popMovies) return null;
    const { popMovies } = this.props;
    let moviesTotal = this.props.popMovies.length;
    let movies = [];
    let rowTotal =
      this.state.width <= 940 ? 1 : this.state.width <= 1200 ? 2 : 3;

    for (let i = 0; i < moviesTotal; i += rowTotal) {
      let row = [];

      for (let j = 0; j < rowTotal; j++) {
        if (popMovies[i + j] != null) row.push(popMovies[i + j]);
      }
      movies.push(row);
    }
    return movies;
  }
  render() {
    const { movies } = this.state;
    const { error } = this.props;
    return movies.length !== 0 ? (
      <MovieList movies={movies} error={error} />
    ) : (
      <Dimmer active>
        <Loader size="massive" />
      </Dimmer>
    );
  }
}

export default MovieListContainer;
