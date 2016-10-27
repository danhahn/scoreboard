import _ from 'lodash';
import React from 'react'
import Panel from '../../layout/Panel/Panel';

const {
  func,
  number,
} = React.PropTypes;

const OsdPitchCount = ({
  pitchCount = 100,
  onClickPitchCountAdd = _.noop,
  onClickPitchCountReduce = _.noop,
  onClickPitchCountReset = _.noop,
}) => {
  return (
    <Panel title="PitchCount" display={pitchCount}>
      <div className="btn-group">
        <button className="btn btn-success" onClick={() => onClickPitchCountAdd(pitchCount)}>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <button className="btn btn-danger" onClick={() => onClickPitchCountReduce(pitchCount)}>
          <span className="glyphicon glyphicon-minus"></span>
        </button>
        <button className="btn btn-default" onClick={() => onClickPitchCountReset()}>Reset</button>
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
