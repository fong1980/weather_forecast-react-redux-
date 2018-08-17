import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/inputForm";
import DisplayWeather from "./components/displayWeather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h3>here comes the sun</h3>
        </div>
        <div>
          <InputForm />
        </div>
        <DisplayWeather />
      </div>
    );
  }
}

export default App;
