import { ADD_TODO, REMOVE_TODO, MARK_TODO } from "../actions/types";

const INITIAL_STATE = {
  todoList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: state.todoList.concat(action.payload) };
    case REMOVE_TODO:
      return { ...state, todoList:
        [...state.todoList.slice(0, action.payload),
        ...state.todoList.slice(action.payload + 1)]
      };
    case MARK_TODO:
      const changedStatus = state.todoList[action.payload];
      changedStatus.done = !changedStatus.done;
      const changedState = [...state.todoList.slice(0, action.payload),
      ...state.todoList.slice(action.payload + 1)];
      return { ...state, todoList: changedState.concat(changedStatus) };
    default:
      return state;
  }
}
