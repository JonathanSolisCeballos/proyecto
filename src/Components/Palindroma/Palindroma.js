import React, { Component } from "react";

export default class Palindroma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: "",
      valores: []
    };
  }
  handleChange = e => {
    this.setState({
      textarea: e.target.value
    });
  };
  handleClick = e => {
    console.log(this.state.textarea);
    let r = this.state.textarea.split("");
    this.setState({
      valores: r
    });
  };
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
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
          className="btn btn-outline-primary"
          onClick={this.handleClick}
        >
          Obtener
        </button>
        {this.state.valores.map((el, indx) => {
          return <h5 key={indx}>{el}</h5>;
        })}
      </div>
    );
  }
}
