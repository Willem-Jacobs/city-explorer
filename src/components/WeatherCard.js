import React from "react";
import Card from "react-bootstrap/Card";

class WeatherCard extends React.Component {
  render() {
    const weatherRender = this.props.weather.map((item, index) => {
      return (
        <Card className="mt-4 text-center" key={index}>
          <Card.Header>{item.date}</Card.Header>
          <Card.Body>
            <Card.Text>
              Forecast: <strong>{item.description}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return <ul className="p-0">{weatherRender}</ul>;
  }
}

export default WeatherCard;
