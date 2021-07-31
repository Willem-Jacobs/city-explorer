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
          <div className="d-inline p-2">
            <Button className="mt-3" onClick={this.props.showMapHandler}>
              <i className="bi-map">
                {"  "}
                {this.props.showMap ? "Hide Map" : "Show Map"}
              </i>
            </Button>
          </div>
          <div className="d-inline p-2">
            <Button className="mt-3" onClick={this.props.showWeatherHandler}>
              <i className="bi-cloud-lightning-rain">
                {"  "}
                {this.props.showWeather ? "Hide Weather" : "Show Weather"}
              </i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default CityCard;
