import _ from 'lodash';
import { connect } from 'react-redux';
import Count from '../../components/Count/Count';

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
};

export default connect(
  mapStateToProps
)(Count);
