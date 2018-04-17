import { TIMER_VISIBILITY } from "../actions/types";

const INITIAL_STATE = {
  showing: false,
  time: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIMER_VISIBILITY:
      return { ...state, showing: action.payload };
    default:
      return state;
  }
}
