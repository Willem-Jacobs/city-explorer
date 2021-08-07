import React from "react";
import Col from "react-bootstrap/Col";

import Movie from "./Movie";

class MoviesCard extends React.Component {
  render() {
    const moviesToRender = this.props.movies.map((movie, index) => {
      return (
        <Col key={index}>
          <Movie movie={movie} />
        </Col>
      );
    });
    return <ul className="p-0">{moviesToRender}</ul>;
  }
}

export default MoviesCard;
