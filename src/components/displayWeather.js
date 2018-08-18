import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";

class DisplayWeather extends PureComponent {
  componentDidlMount() {
    if (this.props.weather === null) this.props.getWeather();
  }

  render() {
    return (
      <div>
        {!this.props.weather && <div>please select a city</div>}
        {this.props.weather && (
          <div>
            <div>
              weather in {this.props.weather.city.name},
              {/* {this.props.weather.city.country} */}
            </div>
            {/* <div>{console.log(this.props.weather)}</div> */}
          </div>
        )}
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
