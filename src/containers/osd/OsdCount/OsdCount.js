import _ from 'lodash';
import { connect } from 'react-redux';
import actions from '../../../actions/actions';
import OsdCount from '../../../components/osd/OsdCount/OsdCount';
import OutsCheck from '../../../utils/outs';

const mapStateToProps = (state) => {
  return {
    count: state.count,
    pitchCount: state.pitchCount,
    outs: state.outs,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onClickStrkie: (strike, pitchCount, outs) => {
    if(strike === 2) {
      dispatch(actions.setPitchCount(pitchCount));
      dispatch(actions.setStrikeReset());
      OutsCheck(dispatch, outs);
    } else {
      dispatch(actions.setStrike(strike));
      dispatch(actions.setPitchCount(pitchCount));
    }
  },
  onClickBall: (ball, pitchCount) => {
    if(ball === 3) {
      dispatch(actions.setBallReset());
      dispatch(actions.setPitchCount(pitchCount));
    } else {
      dispatch(actions.setBall(ball, pitchCount));
      dispatch(actions.setPitchCount(pitchCount));
    }
  },
  onClickFoul: (strike, pitchCount) => {
    if(strike < 2) {
      dispatch(actions.setStrike(strike));
      dispatch(actions.setPitchCount(pitchCount));
    } else {
      dispatch(actions.setPitchCount(pitchCount));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OsdCount);
