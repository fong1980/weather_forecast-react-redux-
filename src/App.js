import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/inputForm";
import DisplayWeather from "./components/displayWeather";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div>
            <h3>Here comes the sun</h3>
          </div>
          <div>
            <InputForm />
          </div>
          <DisplayWeather />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
