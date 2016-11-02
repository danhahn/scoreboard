import _ from 'lodash';
import { connect } from 'react-redux';
import Bases from '../../components/Bases/Bases';

const mapStateToProps = (state) => {
  return {
    bases: state.bases,
  }
};

export default connect(
  mapStateToProps
)(Bases);
