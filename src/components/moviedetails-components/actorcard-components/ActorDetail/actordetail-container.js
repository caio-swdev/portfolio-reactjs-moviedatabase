import React, { Component } from "react";
import ActorDetailView from "./actordetail-view";

class ActorDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { person: this.props.person };
  }
  componentDidMount() {
    this.props.getPerson(this.props.actor.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.person !== this.props.person) {
      this.setState({ person: this.props.person });
    }
  }
  render() {
    const { person } = this.state;
    return person ? <ActorDetailView person={person} /> : "";
  }
}

export default ActorDetailContainer;
