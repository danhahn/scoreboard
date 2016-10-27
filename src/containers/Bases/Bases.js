import _ from 'lodash';
import { connect } from 'react-redux';
import Bases from '../Bases/Bases';

const mapStateToProps = (state) => {
  return {
    firstBase: state.firstBase,
  }
};

export default connect(
  mapStateToProps
)(Bases);
