import React from "react";

class WeatherCard extends React.Component {
  render() {
    const weatherRender = this.props.weather.map((item, index) => {
      return <li key={index}>{`${item.date} - Expect ${item.description}`}</li>;
    });

    return <ul className="mt-3">{weatherRender}</ul>;
  }
}

export default WeatherCard;
