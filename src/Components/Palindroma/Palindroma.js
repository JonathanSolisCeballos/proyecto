import React, { Component } from "react";

export default class Palindroma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: ""
    };
  }
  handleChange = e => {
    this.setState({
      textarea: e.target.value
    });
  };
  handleClick = e => {
    console.log(this.state.textarea);
  };
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={this.handleChange}
            value={this.state.textarea}
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={this.handleClick}
        >
          Obtener
        </button>
      </div>
    );
  }
}
