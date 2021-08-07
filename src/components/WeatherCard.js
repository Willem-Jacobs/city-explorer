import React from "react";
import Card from "react-bootstrap/Card";
import Weather from "./Weather";

class WeatherCard extends React.Component {
  render() {
    const weatherRender = this.props.weather.map((item, index) => {
      return (
        <Card className="mt-4 text-center" key={index}>
          <Weather item={item} />
        </Card>
      );
    });

    return <ul className="p-0">{weatherRender}</ul>;
  }
}

export default WeatherCard;
