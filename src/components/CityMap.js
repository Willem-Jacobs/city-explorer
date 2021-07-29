import React from "react";
import Card from "react-bootstrap/Card";

class CityMap extends React.Component {
  render() {
    return (
      <Card className="mt-3 border rounded">
        <Card.Img
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.props.returnedCity.lat},${this.props.returnedCity.lon}&format=jpg&zoom=11`}
          alt="city map"
        />
      </Card>
    );
  }
}

export default CityMap;
