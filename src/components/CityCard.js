import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class CityCard extends React.Component {
  render() {
    return (
      <Card className="mt-4 text-center">
        <Card.Header>{this.props.cityData.displayName}</Card.Header>
        <Card.Body>
          <Card.Text>
            Latitude: <strong>{this.props.cityData.lat}</strong>
            Longitude: <strong>{this.props.cityData.lon}</strong>
          </Card.Text>
          <Button className="mt-3" onClick={this.props.showMapHandler}>
            <i className="bi-map">{"  "}Show Map</i>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CityCard;
