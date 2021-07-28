import React from "react";
import Card from "react-bootstrap/Card";

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
        </Card.Body>
      </Card>
    );
  }
}

export default CityCard;
