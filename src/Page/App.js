import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Time from "../Components/Time/Time";
import Palindroma from "../Components/Palindroma/Palindroma";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Time />
        <Palindroma />
      </div>
    );
  }
}
