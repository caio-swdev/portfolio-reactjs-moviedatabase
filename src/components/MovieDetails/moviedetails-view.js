import React from "react";
import { Segment, Item, Label } from "semantic-ui-react";
import ActorCard from "../moviedetails-components/ActorCard";
import "./moviedetails.scss";

const MovieDetails = props => {
  const { selectedMovie, actors } = props;
  return (
    <div className="moviedetails">
      <Segment padded="very" raised>
        <Item.Group>
          <Item>
            <Item.Image
              src={`http://image.tmdb.org/t/p/w185/${selectedMovie.poster_path}`}
            />

            <Item.Content style={{ fontSize: "1.25em" }}>
              <Item.Header as="a">{selectedMovie.original_title}</Item.Header>
              <Item.Meta style={{ fontWeight: "bold" }}>
                ({selectedMovie.release_date.split("-")[0]})
              </Item.Meta>
              <Item.Description>{selectedMovie.overview}</Item.Description>
              <Item.Extra>
                <Label size="large" color="blue">
                  {selectedMovie.vote_average}/10
                </Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <div className="cast-section">
        {actors.slice(0, 6).map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
