import React from "react";
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CityCard from "./CityCard";
import CityMap from "./CityMap";
import WeatherCard from "./WeatherCard";
import { ToastContainer } from "react-bootstrap";

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredCity: "",
      returnedCity: {
        lat: "",
        lon: "",
        displayName: "",
        code: "",
      },
      cityWeather: [],
      movies: [],
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

  getWeatherHandler = async () => {
    try {
      let tempWeather = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}/weather?lat=${this.state.returnedCity.lat}&lon=${this.state.returnedCity.lon}`
      );
      this.setState({
        showWeather: true,
        cityWeather: tempWeather.data,
        enteredCity: "",
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status} - ${error.response.data}`,
      });
    }
  };

  getMoviesHandler = async () => {
    try {
      let results = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}/movies?search=${this.state.enteredCity}`
      );
      this.setState({
        movies: results.data,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status} - ${error.response.data}`,
      });
    }
  };

  cityFormSubmitHandler = async (event) => {
    event.preventDefault();
    this.setState({
      renderCityInfo: false,
      showMap: false,
      renderError: false,
      showWeather: false,
      errorMessage: "",
    });
    try {
      let cityResults = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.enteredCity}&format=json&statecode=1&addressdetails=1`
      );
      this.setState({
        renderCityInfo: true,
        returnedCity: {
          lat: cityResults.data[0].lat,
          lon: cityResults.data[0].lon,
          displayName: cityResults.data[0].display_name,
          code: cityResults.data[0].address.country_code,
        },
        renderError: false,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status} - ${error.response.data.error}`,
      });
    }
    if (!this.state.errorMessage) {
      this.getWeatherHandler();
      this.getMoviesHandler();
    }
  };

  clearCityInfo = () => {
    this.setState({
      renderCityInfo: false,
      renderError: false,
      showMap: false,
      showWeather: false,
      errorMessage: "",
      enteredCity: "",
    });
  };

  showMapHandler = () => {
    this.setState({ showMap: !this.state.showMap });
  };

  showWeatherHandler = () => {
    this.setState({ showWeather: !this.state.showWeather });
  };

  closeToastHandler = () => {
    this.setState({
      renderError: false,
      errorMessage: "",
    });
  };

  render() {
    return (
      <>
        <ToastContainer position="top-center">
          <Toast
            className="d-inline-block m-1 bg-danger"
            show={this.state.renderError}
            onClose={this.closeToastHandler}
          >
            <Toast.Header>
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{this.state.errorMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
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
          {this.state.showWeather && (
            <WeatherCard weather={this.state.cityWeather} />
          )}
          {this.state.showMap && (
            <CityMap returnedCity={this.state.returnedCity} />
          )}
        </Container>
      </>
    );
  }
}

export default CityForm;
