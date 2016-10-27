import _ from 'lodash';
import { connect } from 'react-redux';
import PitchCount from '../../components/PitchCount/PitchCount';

const mapStateToProps = (state) => {
  return {
    pitchCount: state.pitchCount,
  }
};

export default connect(
  mapStateToProps
)(PitchCount);
