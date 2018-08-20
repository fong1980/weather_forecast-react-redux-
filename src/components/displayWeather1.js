import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";
import { Card, Paper, withStyles, Slide } from "@material-ui/core";
import { Line } from "react-chartjs-2";

const styles = () => ({});

class DisplayWeather1 extends PureComponent {
  componentDidMount() {
    if (this.props.weather === null) this.props.getWeather();

    console.log("mounted", this.props.weather);
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

    return fiveDays;
  };

  _KelvinToCelsius = kelvin => {
    const a = kelvin - 273.15;
    Math.round(a);
    // const a = (Kelvin - 32) / 1.8;
    return Math.round(a);
  };

  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 100, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div>
        {!this.props.weather && <div>please select a city</div>}

        {this.props.weather && (
          <div className="main-display-weather">
            <div className="city-info">
              weather in {this.props.weather.city.name},
              {this.props.weather.city.country}
            </div>
            {console.log(
              this._groupBy5Days(this.props.weather.list)[1],
              "adsadf"
            )}
            {this._groupBy5Days(this.props.weather.list).map((day, i) => (
              <div className="day">
                {/* <Line data={data} /> */}
                <Card>{day[0].dt_txt.substr(0, 10)}</Card>
                {day.map((x, ii) => (
                  <div className="per-hour">
                    {x.dt_txt.substr(10, 13)}

                    <br />
                    {String(x.dt_txt)}
                    <br />
                    {this._KelvinToCelsius(x.main.temp)}
                    <br />
                  </div>
                ))}

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
)(withStyles(styles)(DisplayWeather1));
