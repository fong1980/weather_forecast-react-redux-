import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";
import { Card, Paper, withStyles, Slide } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { groupBy5Days, KelvinToCelsius } from "../logic/logic";
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

const styles = () => ({});

class DisplayWeather1 extends PureComponent {
  // componentDidMount() {
  //   if (this.props.weather === null) this.props.getWeather();
  // }

  render() {
    const list = this.props.weather.list;
    const ListBy5days = groupBy5Days(list);
    let temp = [];
    let time = [];

    return (
      <div className="weatherList">
        {ListBy5days.map((day, i) => {
          //-----

          let data = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
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

          data.datasets[0].data = [];
          data.labels = [];
          data.datasets[0].label = day[0].dt_txt.substr(0, 10); //label
          data.labels = day.map((x, i) => x.dt_txt.substr(10, 13));
          data.datasets[0].data = day.map((x, i) =>
            KelvinToCelsius(x.main.temp)
          );

          console.log(temp, "---");
          // console.log(data.datasets[0].data, "data");
          // console.log(data.datasets[0].data, "temp");

          return (
            <div>
              <div className=" weatherDayWrapper">
                <div className="dateWrapper">
                  <h3 class="date">vr</h3>
                  <h1 class="date">17</h1>
                  <h2 class="date">aug</h2>
                  <h4 class="date">2018</h4>
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

// <div>
//   data.datasets.data.push(KelvinToCelsius(x.main.temp)),
//   data.labels.push(x.dt_txt.substr(10, 13))
// </div>

// (7) [65, 59, 100, 81, 56, 55, 40] "data"

//["January", "February", "March", "April", "May", "June", "July"]

// temp [14, 14, 16, 22, 24, 25, 24, 22]

// options: {
//   scales: {
//       yAxes: [{
//           ticks: {
//               beginAtZero:true
//           }
//       }]
//   },
//   tooltips: {
//     mode: "label"
//   }
// }
