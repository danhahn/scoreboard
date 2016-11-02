import _ from 'lodash';
import { connect } from 'react-redux';
import actions from '../../../actions/actions';
import OsdBases from '../../../components/osd/OsdBases/OsdBases';

const mapStateToProps = (state) => {
  return {
    bases: state.bases,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onClickSetFirstBase: (firstBase) => {
    dispatch(actions.setFirstBase(firstBase));
  },
  onClickSetSecondBase: (secondBase) => {
    dispatch(actions.setSecondBase(secondBase));
  },
  onClickSetThirdBase: (thirdBase) => {
    dispatch(actions.setThirdBase(thirdBase));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OsdBases);
