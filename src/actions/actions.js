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
};

export default actionCreators;
