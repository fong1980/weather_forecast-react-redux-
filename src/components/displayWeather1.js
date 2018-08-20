import React, { PureComponent } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";
import { Card, Paper, withStyles, Slide } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { groupBy5Days, KelvinToCelsius } from "../logic/logic";

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

    // let data = {
    //   labels: ["January", "February", "March", "April", "May", "June", "July"],
    //   datasets: [
    //     {
    //       label: "My First dataset",
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: "rgba(75,192,192,0.4)",
    //       borderColor: "rgba(75,192,192,1)",
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [65, 59, 100, 81, 56, 55, 40]
    //     }
    //   ]
    // };

    return (
      <div>
        {ListBy5days.map((day, i) => {
          //-----

          let data = {
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

          //-------

          // data.datasets[0].data = []; //reset temperature
          // data.labels = []; //reset time

          data.labels = day.map((x, i) => x.dt_txt.substr(10, 13));

          data.datasets[0].data = day.map((x, i) =>
            KelvinToCelsius(x.main.temp)
          );
          console.log(temp, "---");
          // console.log(data.datasets[0].data, "data");
          // console.log(data.datasets[0].data, "temp");

          return <Line data={data} />;
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
