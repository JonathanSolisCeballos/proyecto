import React, { Component } from "react";
import Webapi from "../../api/Webapi";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.api = new Webapi();
    this.state = {
      time: 0
    };
    this.intervalId = undefined;
  }

  componentDidMount() {
    // this.intervalId = setInterval(()=>{this.fetchCurrentDate()},1000)
    this.fetchCurrentDate();
  }
  fetchCurrentDate = async () => {
    let result = await this.api.getCurrentDate();
    this.setState({
      time: result.data.datetime
    });
  };
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}
