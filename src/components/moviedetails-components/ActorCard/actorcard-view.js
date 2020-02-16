import React from "react";
import "./actorcard.scss";

const ActorCardView = props => {
  return (
    <li className="actorcard" onClick={props.actor.handleOpen}>
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w500/${props.actor.profile_path}`}
          alt="actor"
        />
        <div className="actor-data">
          <h3>{props.actor.name}</h3>
          <p>{props.actor.character}</p>
        </div>
      </div>
    </li>
  );
};

export default ActorCardView;
