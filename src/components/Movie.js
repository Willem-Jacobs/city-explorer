import React from "react";
import Card from "react-bootstrap/Card";

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <Card className="mt-4 text-center">
        <Card.Header>
          <h1>{movie.title}</h1>
        </Card.Header>
        <Card.Body>
          {movie.image_url && (
            <Card.Img
              className="mr-5"
              align="left"
              style={{
                maxWidth: "30%",
                height: "500px",
                marginRight: "20px",
              }}
              src={movie.image_url}
              alt="Movie Poster"
            />
          )}
          <Card.Text align="left">
            <p>
              <strong>Overview: </strong>
              {movie.overview}
            </p>
            <p>
              <strong>Released: </strong> {movie.released_on}
            </p>
            <p>
              <strong>Total Votes: </strong> {movie.total_votes}
            </p>
            <p>
              <strong>Average Votes: </strong> {movie.average_votes}
            </p>
            <p>
              <strong>Popularity: </strong> {movie.popularity}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Movie;
