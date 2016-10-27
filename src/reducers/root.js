import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

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
    case actionTypes.pitchCount:
      return 1;
    default:
      return state;
  }
}

const bases = combineReducers({
  firstBase,
  pitchCount,
});

export default bases;
