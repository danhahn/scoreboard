import _ from 'lodash';
import { connect } from 'react-redux';
import Outs from '../../components/Outs/Outs';

const mapStateToProps = (state) => {
  return {
    outs: state.outs,
  }
};

export default connect(
  mapStateToProps
)(Outs);
