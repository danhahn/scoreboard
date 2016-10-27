import _ from 'lodash';
import React from 'react'
import Panel from '../../layout/Panel/Panel';

const {
  func,
  number,
} = React.PropTypes;

const OsdPitchCount = ({
  count = {
    ball: 1,
    strike: 2,
  },
  pitchCount,
  onClickStrkie = _.noop,
  onClickBall = _.noop,
  onClickFoul = _.noop,
}) => {
  return (
    <Panel title="Count" display={`Balls - ${count.ball} | Strkes - ${count.strike}`}>
      <div className="btn-group">
        <button className="btn btn-default" onClick={() => onClickStrkie(count.strike, pitchCount)}>
          Strike
        </button>
        <button className="btn btn-default" onClick={() => onClickBall(count.ball, pitchCount)}>
          Ball
        </button>
        <button className="btn btn-default" onClick={() => onClickFoul()}>Foul</button>
      </div>
    </Panel>
  )
}

OsdPitchCount.PropTypes = {
  pitchCount: number,
  onClickPitchCountAdd: func,
  pitchCountSubtrack: func,
}

export default OsdPitchCount;
