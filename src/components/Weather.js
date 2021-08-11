import React from "react";
import Card from "react-bootstrap/Card";

class Weather extends React.Component {
  render() {
    const timeLapse = (time) => {
      const timeNow = Date.now();
      return ((timeNow - time) / 1000).toFixed(2);
    };

    const { item } = this.props;
    return (
      <>
        <Card.Header>
          {item.date} Data cached: {timeLapse(item.timestamp)} seconds ago.
        </Card.Header>
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
