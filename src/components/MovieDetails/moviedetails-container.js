import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

import MovieDetails from "./moviedetails-view";

class MovieDetailsContainer extends Component {
  componentDidMount() {
    this.props.getCredits(this.getUrlId());
    this.props.getMovie(this.getUrlId());
  }

  getUrlId() {
    let parts = this.props.match.url.split("/");
    const urlId = parts.pop();
    return urlId;
  }

  render() {
    const { movie, cast } = this.props;
    return movie != undefined ? (
      <MovieDetails selectedMovie={movie} actors={cast} />
    ) : (
      <Dimmer active>
        <Loader size="massive" />
      </Dimmer>
    );
  }
}

export default withRouter(MovieDetailsContainer);
