import actionTypes from './actionTypes';

const actionCreators = {
  setFirstBase: (firstBase) => ({
    type: actionTypes.SET_FRIST_BASE,
    firstBase,
  }),
};

export default actionCreators;
