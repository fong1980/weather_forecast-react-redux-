import React, { PureComponent } from "react";
import { getWeather, getWDayWeather } from "../actions/weather";
import { connect } from "react-redux";
import { Card, Paper, withStyles, Slide } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { groupBy5Days, KelvinToCelsius, data } from "../logic/logicConstants";

class DisplayWeather1 extends PureComponent {
  // componentDidMount() {
  //   if (this.props.weatherDay === null) this.props.getWeather();
  //   // console.log("mounted", this.props.weather);
  // }

  render() {
    if (!this.props.weatherDay) {
      return (
        <div>
          <br />
          please select a country
        </div>
      );
    }

    const list = this.props.weather.list;
    const ListBy5days = groupBy5Days(list);
    const weatherDay = this.props.weatherDay;

    return (
      <div className="weatherList">
        {ListBy5days.map((day, i) => {
          let data = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 20,
                    max: 200
                  }
                }
              ]
            },
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "Temp",
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointRadius: 5,
                data: [65, 59, 100, 81, 56, 55, 40]
              }
            ]
          };

          data.datasets[0].label = day[0].dt_txt.substr(0, 10); //label
          data.labels = day.map((x, i) => x.dt_txt.substr(10, 13));
          data.datasets[0].data = day.map((x, i) =>
            KelvinToCelsius(x.main.temp)
          );
          const time = String(new Date(day[0].dt * 1000)).split(" ");

          let condition;
          if (i !== 0) {
            condition = day[4].weather[0].icon;
          } else {
            condition = weatherDay.weather[0].icon;
          }

          return (
            <div>
              <div className=" weatherDayWrapper">
                <div className="dateWrapper">
                  <h3 class="date">{time[0]}</h3>
                  <h1 class="date">{time[1]}</h1>
                  <h2 class="date">{time[2]}</h2>
                  <h4 class="date">{time[3]}</h4>

                  <img
                    src={`http://openweathermap.org/img/w/${condition}.png`}
                    alt="Smiley face"
                    height="62"
                    width="62"
                  />
                </div>
                <div className="graph">
                  <Line data={data} />
                </div>
              </div>
              <div className="seperator">seperator</div>
            </div>
          );
          //return nothing
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
  weatherDay: state.dayWeather
});

export default connect(
  mapStateToProps,
  { getWeather, getWDayWeather }
)(DisplayWeather1);
