import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';
import count from './count';

const firstBase = (state = true, action) => {
  switch (action.type) {
    case actionTypes.SET_FRIST_BASE:
      return action.firstBase;
    default:
      return state;
  }
};

const pitchCount = (state = 10, action) => {
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


const bases = combineReducers({
  firstBase,
  pitchCount,
  count,
});

export default bases;
