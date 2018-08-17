import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";

class DisplayWeather extends PureComponent {
  render() {
    return (
      <div>
        test
        {console.log(this.props.weather)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getWeather }
)(DisplayWeather);
