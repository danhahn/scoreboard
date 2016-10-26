import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const fristBase = (state = true, action) => {
  switch (action.type) {
    case actionTypes.SET_FRIST_BASE:
      return action.firstBase;
    default:
      return state;
  }
};

const bases = combineReducers({
  firstBase,
});

export default bases;
