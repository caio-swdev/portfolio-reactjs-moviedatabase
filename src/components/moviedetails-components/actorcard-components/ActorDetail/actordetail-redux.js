import React, { Component } from "react";
import { connect } from "react-redux";
import { getPerson } from "../../../../actions/getPerson";
import ActorDetailContainer from "./actordetail-container";

class ActorDetailRedux extends Component {
  render() {
    const { getPerson, person, actor } = this.props;
    return (
      <ActorDetailContainer
        getPerson={getPerson}
        person={person}
        actor={actor}
      />
    );
  }
}

const mapStateToProps = state => ({
  person: state.person
});

export default connect(mapStateToProps, { getPerson })(ActorDetailRedux);
