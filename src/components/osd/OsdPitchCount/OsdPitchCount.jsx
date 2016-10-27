import _ from 'lodash';
import React from 'react'

const {
  func,
  number,
} = React.PropTypes;

const OsdPitchCount = ({
  pitchCount = 100,
  onClickPitchCountAdd = _.noop,
  pitchCountSubtrack = _.noop,
}) => {
  return (
    <div>
      <h1>{pitchCount}</h1>
      <div>
        <button onClick={(pitchCount) => onClickPitchCountAdd(pitchCount)}>+</button>
        <button onClick={pitchCountSubtrack}>-</button>
      </div>
    </div>
  )
}

OsdPitchCount.PropTypes = {
  pitchCount: number,
  onClickPitchCountAdd: func,
  pitchCountSubtrack: func,
}

export default OsdPitchCount;
