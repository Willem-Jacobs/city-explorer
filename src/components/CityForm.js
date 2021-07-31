import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CityCard from "./CityCard";
import CityMap from "./CityMap";
import WeatherCard from "./WeatherCard";

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredCity: "",
      returnedCity: {
        lat: "",
        lon: "",
        displayName: "",
      },
      cityWeather: [],
      renderCityInfo: false,
      renderError: false,
      errorMessage: "",
      showMap: false,
      showWeather: false,
    };
  }

  cityOnChangeHandler = (event) => {
    this.setState({ enteredCity: event.target.value });
    if (this.state.renderCityInfo) {
      this.setState({ renderCityInfo: false });
    }
    if (this.state.renderError) {
      this.setState({ renderError: false });
    }
  };

  cityFormSubmitHandler = async (event) => {
    event.preventDefault();
    this.setState({
      renderCityInfo: false,
      showMap: false,
      renderError: false,
      showWeather: false,
    });
    try {
      let cityResults = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.enteredCity}&format=json`
      );
      this.setState({
        renderCityInfo: true,
        returnedCity: {
          lat: cityResults.data[0].lat,
          lon: cityResults.data[0].lon,
          displayName: cityResults.data[0].display_name,
        },
        renderError: false,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status}, ${error.response.data.error}`,
      });
      console.log("Error State: ", this.state.errorMessage);
    }

    try {
      let tempWeather = await axios.get(
        `http://localhost:3001/weather?city=${this.state.enteredCity}`
      );
      this.setState({
        showWeather: true,
        cityWeather: tempWeather.data,
        enteredCity: "",
      });
      console.log(this.state.cityWeather);
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status}, ${error.response.data.error}`,
      });
    }
  };

  clearCityInfo = () => {
    this.setState({
      renderCityInfo: false,
      renderError: false,
      showMap: false,
      showWeather: false,
    });
  };

  showMapHandler = () => {
    this.setState({ showMap: !this.state.showMap });
  };

  showWeatherHandler = () => {
    this.setState({ showWeather: !this.state.showWeather });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.cityFormSubmitHandler}>
          <Form.Group
            className="mb-4 p-3 mt-5 border rounded border-warning"
            controlId="formCityName"
          >
            <Form.Label>City Name</Form.Label>
            <Form.Control
              className="rounded border-primary"
              type="text"
              value={this.state.enteredCity}
              placeholder="Enter city name to search"
              onChange={this.cityOnChangeHandler}
              onFocus={this.clearCityInfo}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            <i className="bi-compass">{"  "}Explore!</i>
          </Button>
        </Form>
        {this.state.renderCityInfo && (
          <CityCard
            showMapHandler={this.showMapHandler}
            showWeatherHandler={this.showWeatherHandler}
            showMap={this.state.showMap}
            showWeather={this.state.showWeather}
            cityData={this.state.returnedCity}
          />
        )}
        {this.state.renderError && (
          <p className="mt-4">{this.state.errorMessage}</p>
        )}
        {this.state.showWeather && (
          <WeatherCard weather={this.state.cityWeather} />
        )}
        {this.state.showMap && (
          <CityMap returnedCity={this.state.returnedCity} />
        )}
      </Container>
    );
  }
}

export default CityForm;
