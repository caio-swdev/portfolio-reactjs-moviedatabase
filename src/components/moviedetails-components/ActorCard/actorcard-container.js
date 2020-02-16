import React, { Component } from "react";
import ActorCard from "./actorcard-view";
import ActorCardDetail from "../actorcard-components/ActorDetail";
import Modal from "../Modal";

class ActorCardContainer extends Component {
  render() {
    const { actor } = this.props;
    return (
      <>
        <Modal
          button={<ActorCard actor={actor} />}
          content={<ActorCardDetail actor={actor} />}
        />
      </>
    );
  }
}

export default ActorCardContainer;
