import _ from 'lodash';
import { connect } from 'react-redux';
import actions from '../../../actions/actions';
import OsdPitchCount from '../../../components/osd/OsdPitchCount/OsdPitchCount';

const mapStateToProps = (state) => {
  return {
    pitchCount: state.pitchCount,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onClickPitchCountAdd: (pitchCount) => {
    dispatch(actions.setPitchCount(pitchCount));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OsdPitchCount);
