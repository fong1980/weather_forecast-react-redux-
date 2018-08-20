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
    return (
      <div>
        {/* {console.log(list, "list")} */}

        {/* {console.log(groupBy5Days(list), "tests")} */}
        {ListBy5days.map((day, i) => (
          <div className="days">
            {console.log("breek")}
            {day.map(x => console.log(KelvinToCelsius(x.main.temp)))}
            <br />
          </div>
        ))}
        {/* {ListOf5days.map((day, i) =>
              day.map(x => this._KelvinToCelsius(x.main.temp))
            )} */}
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
