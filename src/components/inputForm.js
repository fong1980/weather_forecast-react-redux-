import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";

class InputForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getWeather(this.state);
    console.log("this is from the state", this.state);
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <input
            name="city"
            placeholder="city"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          country:
          <input
            name="country"
            placeholder="country"
            value={this.state.country}
            onChange={this.handleInputChange}
          />
          <button type="submit">get wheater</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  batchs: state.batchs
});

export default connect(
  mapStateToProps,
  { getWeather }
)(InputForm);
