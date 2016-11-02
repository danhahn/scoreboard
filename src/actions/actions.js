import actionTypes from './actionTypes';

const actionCreators = {
  setFirstBase: (firstBase) => ({
    type: actionTypes.SET_FRIST_BASE,
    firstBase,
  }),
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

};

export default actionCreators;
