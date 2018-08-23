import React, { PureComponent } from "react";
import { getWeather, getWDayWeather } from "../actions/weather";
import { connect } from "react-redux";

import { Line } from "react-chartjs-2";
import { groupBy5Days, KelvinToCelsius } from "../logic/logicConstants";

class DisplayWeather1 extends PureComponent {
  render() {
    if (!this.props.weatherDay) {
      return <div>please select a country</div>;
    }

    const list = this.props.weather.list;
    const ListBy5days = groupBy5Days(list);
    const weatherDay = this.props.weatherDay;

    return (
      <div>
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
            <div key="returnFromWeather">
              <div className=" weatherDayWrapper">
                <div className="dateWrapper">
                  <h3 key="dayOfWeek">{time[0]}</h3>
                  <h1 key="month">{time[1]}</h1>
                  <h2 key="dayMonth">{time[2]}</h2>
                  <h4 key="year">{time[3]}</h4>

                  <img
                    src={`http://openweathermap.org/img/w/${condition}.png`}
                    alt="Smiley face"
                    height="62"
                    width="62"
                    key={"icon"}
                  />
                </div>
                <div className="graph">
                  <Line data={data} />
                </div>
              </div>
              <div className="seperator">
                <br />
              </div>
            </div>
          );
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
