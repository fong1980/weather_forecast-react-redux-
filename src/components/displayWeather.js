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

  _KelvinToCelsius = kelvin => {
    const a = kelvin - 273.15;
    Math.round(a);
    // const a = (Kelvin - 32) / 1.8;
    return Math.round(a);
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
            {console.log(
              this._groupBy5Days(this.props.weather.list)[0],
              "adsadf"
            )}
            {this._groupBy5Days(this.props.weather.list).map((day, i) => (
              <div className="day">
                -------------
                {day[0].dt_txt.substr(0, 10)}
                <div className="hours">
                  {day.map((x, ii) => (
                    <div className="per-hour">
                      <br />
                      Time:
                      {x.dt_txt.substr(10, 13)}
                      <br />
                      Condition: {x.weather[0].main}
                      <br />
                      Temp: {this._KelvinToCelsius(x.main.temp)}
                      <br />
                    </div>
                  ))}
                </div>
                <br />
              </div>
            ))}
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
