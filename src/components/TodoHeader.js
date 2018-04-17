import React, { Component } from "react";
import moment from "moment";
import "./styles/TodoStyles.css";
import jquery from 'jquery';
const $ = window.$ = window.jQuery = jquery;

class TodoHeader extends Component {
  render() {
    return <h1>Todo list</h1>;
  }
}

export default TodoHeader;
