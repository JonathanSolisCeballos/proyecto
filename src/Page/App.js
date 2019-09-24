import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Time from "../Components/Time/Time";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Time />
      </div>
    );
  }
}
