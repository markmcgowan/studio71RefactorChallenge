import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from "moment";
import jquery from 'jquery';
import { toggleTimer } from '../actions';

import TodoHeader from '../components/TodoHeader';
import Timer from '../components/Timer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const $ = window.$ = window.jQuery = jquery;

class TodoApp extends Component {
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <button onClick={() => this.props.toggleTimer(!this.props.timerVariables.showing)}>
          Toggle Timer
        </button>
        {this.props.timerVariables.showing ? <Timer /> : null}
        <TodoList
          items={this.props.todoItems.todoList}
        />
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const timerVariables = state.timer;
  const todoItems = state.todos;
  return { timerVariables, todoItems };
};

export default connect(mapStateToProps, { toggleTimer })(TodoApp);
