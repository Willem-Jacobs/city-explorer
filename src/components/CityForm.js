import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CityCard from "./CityCard";

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

  render() {
    return (
      <Container>
        <Form onSubmit={this.cityFormSubmitHandler}>
          <Form.Group className="mb-3" controlId="formCityName">
            <Form.Label>City Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.enteredCity}
              placeholder="Enter city name to search"
              onChange={this.cityOnChangeHandler}
            />
            <Form.Text className="text-muted">
              The coordinates will be returned.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
        {this.state.renderCityInfo && 
          <CityCard cityData={this.state.returnedCity}/>
        }
        {this.state.renderError && (
          <p className="mt-4">{this.state.errorMessage}</p>
        )}
      </Container>
    );
  }
}

export default CityForm;
