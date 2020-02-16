import React from "react";
import "./actordetail.scss";

const ActorDetailView = props => {
  const { person } = props;
  return (
    <li className="actor-detail">
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w500/${person.profile_path}`}
          alt="actor"
        />
        <div className="actor-data">
          <h3>{person.name}</h3>
          <p>Place of Birth:</p>
          <b>{person.place_of_birth}</b>
          <p>Birthday:</p>
          <b>{person.birthday}</b>
          <p>Popularity:</p> <b>{person.popularity}</b>
        </div>
      </div>
    </li>
  );
};

export default ActorDetailView;
