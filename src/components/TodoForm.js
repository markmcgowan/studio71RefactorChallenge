import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from "moment";
import "./styles/TodoStyles.css";
import jquery from 'jquery';
import { addItem } from '../actions';
const $ = window.$ = window.jQuery = jquery;

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    $("#itemName").focus();
  }
  onSubmit(event) {
    event.preventDefault();
    let newItemValue = $("#itemName").val();

    if (newItemValue) {
      this.props.addItem({
        index: this.props.todoItems.todoList.length + 1,
        value: newItemValue,
        date: moment().format("ll"),
        done: false
      });
      $('#todoForm').trigger("reset");
    }
  }
  render() {
    return (
      <form ref="form" id="todoForm" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          id="itemName"
          className="form-control"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const todoItems = state.todos;
  return { todoItems };
};

export default connect(mapStateToProps, { addItem })(TodoForm);
