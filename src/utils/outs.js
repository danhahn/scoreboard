import actions from '../actions/actions';

export default function(dispatch, outs) {
  outs < 2
    ? dispatch(actions.setOuts(outs))
    : dispatch(actions.setOutsReset());
};
