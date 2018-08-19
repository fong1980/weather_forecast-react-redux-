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
      // console.log(list, "--");

      return list;
    }, {});
  };

  _Get5Days = data => {
    const a = data.length > 5 ? data.slice(0, 5) : data;
    console.log(a, "get days");
    return a;
  };

  render() {
    var eenArray = ["a", "b"]; // to test, cleanup later
    return (
      <div>
        {!this.props.weather && <div>please select a city</div>}

        {this.props.weather && (
          <div className="main display-weather">
            {console.log(
              this._Get5Days(
                Object.values(this._groupByDays(this.props.weather.list))
              )
            )}

            <div className="city-info">
              weather in {this.props.weather.city.name},
              {this.props.weather.city.country}
            </div>
            {Object.values(this._groupByDays(this.props.weather.list)).map(
              (days, i) => console.log(i, "dit is i")
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
