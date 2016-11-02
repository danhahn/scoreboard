const getActionType = (type) => `core - ${type}`;

const initActionTypes = [
  'INITIALIZE',
];

const basesActionTypes = [
  'SET_FRIST_BASE',
  'SET_SECOND_BASE',
  'SET_THIRD_BASE',
  'SET_PITCH_COUNT',
  'SET_PITCH_COUNT_REDUCE',
  'SET_PITCH_COUNT_RESET',
  'SET_STRIKE',
  'SET_STRIKE_RESET',
  'SET_BALL',
  'SET_OUTS',
  'SET_OUTS_REDUCE',
  'SET_OUTS_RESET',
];

const actionTypes = [
  ...initActionTypes,
  ...basesActionTypes,
].reduce((accum, action) => ({
  ...accum,
  [action]: getActionType(action),
}), {});

export default actionTypes;
