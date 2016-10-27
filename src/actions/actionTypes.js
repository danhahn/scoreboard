const getActionType = (type) => `core - ${type}`;

const initActionTypes = [
  'INITIALIZE',
];

const basesActionTypes = [
  'SET_FRIST_BASE',
  'SET_SECOND_BASE',
  'SET_THIRD_BASE',
  'SET_PITCH_COUNT',
];

const actionTypes = [
  ...initActionTypes,
  ...basesActionTypes,
].reduce((accum, action) => ({
  ...accum,
  [action]: getActionType(action),
}), {});

export default actionTypes;
