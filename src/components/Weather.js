import React from "react";
import Card from "react-bootstrap/Card";

class Weather extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <>
        <Card.Header>{item.date}</Card.Header>
        <Card.Body>
          <Card.Text>
            Forecast: <strong>{item.description}</strong>
            <span>
              <img
                src={`/images/weather/icons/${item.icon}.png`}
                alt="weather icon"
              />
            </span>
          </Card.Text>
        </Card.Body>
      </>
    );
  }
}

export default Weather;
