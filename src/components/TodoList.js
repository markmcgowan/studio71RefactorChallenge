import React, { Component } from "react";
import moment from "moment";
import "./styles/TodoStyles.css";
import jquery from 'jquery';
import TodoListItem from './TodoListItem';
const $ = window.$ = window.jQuery = jquery;

class TodoList extends Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}

export default TodoList;
