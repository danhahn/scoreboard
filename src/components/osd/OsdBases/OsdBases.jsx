import _ from 'lodash';
import React from 'react'
import classNames from 'classnames';
import Panel from '../../layout/Panel/Panel';
import Bases from '../../Bases/Bases';

const {
  func,
  object,
} = React.PropTypes;

function checkIsActive (isActive) {
  const styles = classNames({
    'btn': true,
    'btn-default': true,
    'btn-success': isActive,
  });
  return styles;
}

const OsdPitchCount = ({
  bases = {
    firstBase: true,
    secondBase: false,
    thirdBase: false,
  },
  onClickSetFirstBase = _.noop,
  onClickSetSecondBase = _.noop,
  onClickSetThirdBase = _.noop,
}) => {
  return (
    <Panel title="Bases">
      <Bases bases={bases} style={{position: 'static'}}/>
      <div className="btn-group">
        <button className={checkIsActive(bases.firstBase)} onClick={() => onClickSetFirstBase(bases.firstBase)}>
          First Base
        </button>
        <button className={checkIsActive(bases.secondBase)} onClick={() => onClickSetSecondBase(bases.secondBase)}>
          Second Base
        </button>
        <button className={checkIsActive(bases.thirdBase)} onClick={() => onClickSetThirdBase(bases.thirdBase)}>
          Third Base
        </button>
      </div>
    </Panel>
  )
}

OsdPitchCount.PropTypes = {
  bases: object,
  onClickSetFirstBase: func,
  onClickSetSecondBase: func,
  onClickSetThirdBase: func,
}

export default OsdPitchCount;
