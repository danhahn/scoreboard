import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const strike = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SET_STRIKE:
      return action.strike + 1;
    case actionTypes.SET_STRIKE_RESET:
      return 0;
    default:
      return state;
  }
};

const ball = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SET_BALL:
      return action.ball + 1;
    default:
      return state;
  }
};

const count = combineReducers({
  strike,
  ball,
});

export default count;
