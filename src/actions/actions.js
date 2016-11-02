import actionTypes from './actionTypes';

const actionCreators = {
  setPitchCount: (pitchCount) => ({
    type: actionTypes.SET_PITCH_COUNT,
    pitchCount,
  }),
  setPitchCountReduce: (pitchCount) => ({
    type: actionTypes.SET_PITCH_COUNT_REDUCE,
    pitchCount,
  }),
  setPitchCountReset: () => ({
    type: actionTypes.SET_PITCH_COUNT_RESET,
  }),
  setStrike: (strike) => ({
    type: actionTypes.SET_STRIKE,
    strike,
  }),
  setStrikeReset: () => ({
    type: actionTypes.SET_STRIKE_RESET,
  }),
  setBallReduce: (ball) => ({
    type: actionTypes.SET_BALL_REDUCE,
    ball,
  }),
  setBallReset: () => ({
    type: actionTypes.SET_BALL_RESET,
  }),
  setBall: (ball) => ({
    type: actionTypes.SET_BALL,
    ball,
  }),
  setOuts: (outs) => ({
    type: actionTypes.SET_OUTS,
    outs,
  }),
  setOutsReduce: (outs) => ({
    type: actionTypes.SET_OUTS_REDUCE,
    outs,
  }),
  setOutsReset: () => ({
    type: actionTypes.SET_OUTS_RESET,
  }),
  setFirstBase: (firstBase) => ({
    type: actionTypes.SET_FIRST_BASE,
    firstBase,
  }),
  resetFirstBase: () => ({
    type: actionTypes.REMOVE_FIRST_BASE,
  }),
  setSecondBase: (secondBase) => ({
    type: actionTypes.SET_SECOND_BASE,
    secondBase,
  }),
  resetSecondBase: () => ({
    type: actionTypes.REMOVE_SECOND_BASE,
  }),
  setThirdBase: (thirdBase) => ({
    type: actionTypes.SET_THIRD_BASE,
    thirdBase,
  }),
  resetThirdBase: () => ({
    type: actionTypes.REMOVE_THIRD_BASE,
  }),
};

export default actionCreators;
