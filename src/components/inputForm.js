import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "material-ui/TextField";

class InputForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { city: "amsterdam", country: "nl" };
    this.handleInputChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log("handlesubmit");
    // console.log(this.state, "teeeee");
    this.props.getWeather(this.state);
  };

  handleChange = e => {
    console.log(this.state);
    const { name, value } = e.target;

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
        {/* <button type="submit">get weather___</button> */}
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
  { getWeather }
)(InputForm);
