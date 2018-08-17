import React, { PureComponent } from "react";

export default class InputForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log("aaaaa!");
  };

  handleChange = event => {
    console.log(this.state);
    const { name, value } = event.target;

    this.setState({
      [name]: value
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
          <br />
          country:
          <input
            name="lastName"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <button type="submit">get wheater</button>
        </div>
      </form>
    );
  }
}
