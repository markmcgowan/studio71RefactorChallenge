import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from "moment";
import "./styles/TimeStyles.css";

class Timer extends React.Component {
  state = {count: 0}
  timer = null;

  updateTimer = () => {
    this.setState({
      count: this.state.count += 1
    });
  }

  componentDidMount = () => {
    const that = this;
    that.timer = setInterval(that.updateTimer, 1000);
  }

  render = () => {
    return (
      <div>
        <h2>Seconds so Far:</h2>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Timer;
