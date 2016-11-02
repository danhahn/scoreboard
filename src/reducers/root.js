import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';
import count from './count';
import bases from './bases';

const pitchCount = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SET_PITCH_COUNT:
      return action.pitchCount + 1;
    case actionTypes.SET_PITCH_COUNT_REDUCE:
      return action.pitchCount - 1;
    case actionTypes.SET_PITCH_COUNT_RESET:
      return 0;
    default:
      return state;
  }
}

const outs = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SET_OUTS:
      return action.outs + 1;
    case actionTypes.SET_OUTS_REDUCE:
      return action.outs - 1;
    case actionTypes.SET_OUTS_RESET:
      return 0;
    default:
      return state;
  }
}


const scoreboard = combineReducers({
  bases,
  pitchCount,
  count,
  outs,
});

export default scoreboard;
