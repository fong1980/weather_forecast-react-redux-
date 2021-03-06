import React, { PureComponent } from "react";
import { getWeather, getWDayWeather } from "../actions/weather";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "material-ui/TextField";

class InputForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { city: "Amsterdam", country: "nl" };
    this.handleInputChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.getWeather(this.state);
    this.props.getWDayWeather(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <TextField
          name="city"
          placeholder="city"
          value={this.state.city}
          onChange={this.handleInputChange}
        />
        {"    _     "}
        <TextField
          name="country"
          placeholder="country"
          value={this.state.country}
          onChange={this.handleInputChange}
        />

        <Button
          type="submit"
          size="small"
          variant="outlined"
          component="span"
          onClick={this.handleSubmit}
        >
          get weather
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getWeather, getWDayWeather }
)(InputForm);
