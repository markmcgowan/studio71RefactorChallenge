import { ADD_TODO, REMOVE_TODO, MARK_TODO } from "../actions/types";

export const addItem = (todoItem) => {
  return {
    type: ADD_TODO,
    payload: todoItem,
  };
};

export const removeItem = (todoIndex) => {
  return {
    type: REMOVE_TODO,
    payload: todoIndex,
  };
};

export const markTodoDone = (todoIndex) => {
  return {
    type: MARK_TODO,
    payload: todoIndex,
  };
};
