import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class MoviesCard extends React.Component {
  render() {
    const moviesToRender = this.props.movies.map((movie, index) => {
      return (
        <Col key={index}>
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
        </Col>
      );
    });

    return <ul className="p-0">{moviesToRender}</ul>;
  }
}

export default MoviesCard;
