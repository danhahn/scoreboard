import { combineReducers } from 'redux';
import actionTypes from '../actions/actionTypes';

const firstBase = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SET_FIRST_BASE:
      return !action.firstBase;
    case actionTypes.REMOVE_FIRST_BASE:
      return false;
    default:
      return state;
  }
};

const secondBase = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SET_SECOND_BASE:
      return !action.secondBase;
    case actionTypes.REMOVE_SECOND_BASE:
      return false;
    default:
      return state;
  }
};

const thirdBase = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SET_THIRD_BASE:
      return !action.thirdBase;
    case actionTypes.REMOVE_THIRD_BASE:
      return false;
    default:
      return state;
  }
};

const count = combineReducers({
  firstBase,
  secondBase,
  thirdBase,
});

export default count;
