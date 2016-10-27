import _ from 'lodash';
import { connect } from 'react-redux';
import actions from '../../../actions/actions';
import OsdCount from '../../../components/osd/OsdCount/OsdCount';

const mapStateToProps = (state) => {
  return {
    count: state.count,
    pitchCount: state.pitchCount,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onClickStrkie: (strike, pitchCount) => {
    if(strike === 2) {
      dispatch(actions.setPitchCount(pitchCount));
      alert('out');
    } else {
      dispatch(actions.setStrike(strike));
      dispatch(actions.setPitchCount(pitchCount));
    }
  },
  onClickBall: (ball, pitchCount) => {
    dispatch(actions.setBall(ball, pitchCount));
    dispatch(actions.setPitchCount(pitchCount));
  },
  onClickFoul: () => {
    dispatch(actions.setPitchCountReset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OsdCount);
