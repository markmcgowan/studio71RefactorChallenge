import { combineReducers } from "redux";
import TodoReducer from "./reducer_todo";
import TimeReducer from "./reducer_time";

const rootReducer = combineReducers({
  timer: TimeReducer,
  todos: TodoReducer,
});

export default rootReducer;
