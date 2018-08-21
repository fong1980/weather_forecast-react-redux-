import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";
import { Card, Paper, withStyles, Slide } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { groupBy5Days, KelvinToCelsius, data } from "../logic/logicConstants";

const styles = () => ({});

class DisplayWeather1 extends PureComponent {
  // componentDidMount() {
  //   if (this.props.weather === null) this.props.getWeather();
  // }

  render() {
    const list = this.props.weather.list;
    const ListBy5days = groupBy5Days(list);

    return (
      <div className="weatherList">
        {ListBy5days.map((day, i) => {
          //-----

          // beginAtZero:true,
          // min: 0,
          // max: 100

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
                pointRadius: 2,
                data: [65, 59, 100, 81, 56, 55, 40]
              }
            ]
          };

          data.datasets[0].label = day[0].dt_txt.substr(0, 10); //label
          data.labels = day.map((x, i) => x.dt_txt.substr(10, 13));
          // console.log(data.datasets[0].data);
          data.datasets[0].data = day.map((x, i) =>
            KelvinToCelsius(x.main.temp)
          );

          const time = String(new Date(day[0].dt * 1000)).split(" ");

          return (
            <div>
              {/* {(console.log(date_), "date__")} */}
              <div className=" weatherDayWrapper">
                <div className="dateWrapper">
                  {/* {console.log(day)} */}
                  <h3 class="date">{time[0]}</h3>
                  <h1 class="date">{time[1]}</h1>
                  <h2 class="date">{time[2]}</h2>
                  <h4 class="date">{time[3]}</h4>
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
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getWeather }
)(DisplayWeather1);
