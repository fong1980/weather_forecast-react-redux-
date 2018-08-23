import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/inputForm";

import DisplayWeather1 from "./components/displayWeather1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h3>Here comes the sun</h3>
        </div>
        <div>
          <InputForm />
        </div>
        <div>
          <DisplayWeather1 />
        </div>
      </div>
    );
  }
}

export default App;
