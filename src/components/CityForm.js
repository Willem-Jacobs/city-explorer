import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CityCard from "./CityCard";
import CityMap from "./CityMap";

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
      renderCityInfo: false,
      renderError: false,
      errorMessage: "",
      showMap: false,
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
        enteredCity: "",
      });
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
    });
  };

  showMapHandler = () => {
    this.setState({ showMap: true });
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
              autocomplete="off"
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
            cityData={this.state.returnedCity}
          />
        )}
        {this.state.renderError && (
          <p className="mt-4">{this.state.errorMessage}</p>
        )}
        {this.state.showMap && (
          <CityMap returnedCity={this.state.returnedCity} />
        )}
      </Container>
    );
  }
}

export default CityForm;
