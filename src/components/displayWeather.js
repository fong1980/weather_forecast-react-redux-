import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";

class DisplayWeather extends PureComponent {
  componentDidMount() {
    if (this.props.weather === null) this.props.getWeather();
    // console.log("mounted", this.props.weather);
  }

  _groupBy5Days = data => {
    const days = Object.values(
      data.reduce((list, item) => {
        const forecastDate = item.dt_txt.substr(0, 10);
        list[forecastDate] = list[forecastDate] || [];
        list[forecastDate].push(item);
        return list;
      }, {})
    );
    const fiveDays = days.length > 5 ? days.slice(0, 5) : days;
    // console.log(fiveDays, "-------");

    return fiveDays;
  };

  render() {
    var eenArray = ["a", "b"]; // to test, cleanup later
    return (
      <div>
        {!this.props.weather && <div>please select a city</div>}

        {this.props.weather && (
          <div className="main display-weather">
            <div className="city-info">
              weather in {this.props.weather.city.name},
              {this.props.weather.city.country}
            </div>
            {this._groupBy5Days(this.props.weather.list).map((days, i) =>
              console.log(days, "dit is i")
            )}
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
