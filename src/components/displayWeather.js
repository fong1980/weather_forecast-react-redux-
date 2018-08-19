import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";

class DisplayWeather extends PureComponent {
  componentDidMount() {
    if (this.props.weather === null) this.props.getWeather();
    // console.log("mounted", this.props.weather);
  }

  _groupByDays = data => {
    // console.log("data:",data)
    return data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0, 10);
      // console.log("forecastdate", forecastDate);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;
    }, {});
  };

  render() {
    const eenArray = ["a", "b"];
    return (
      <div>
        {!this.props.weather && <div>please select a city</div>}

        {this.props.weather && (
          <div className="main display-weather">
            {console.log(
              "test",
              Object.values(this._groupByDays(this.props.weather.list))
            )}
            <div className="city-info">
              weather in {this.props.weather.city.name},
              {this.props.weather.city.country}
            </div>
            {Object.values(this._groupByDays(this.props.weather.list)).map(
              (days, i) => console.log("ben ik er?")
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
