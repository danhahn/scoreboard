import React from 'react';
import './PitchCount.css';

const PitchCount = React.createClass({
  getDefaultProps() {
    return {
      pitchCount: 100,
    }
  },
  render () {
    const { pitchCount } = this.props;
    return (
      <div className="PitchCount">
        Pitch <span>{pitchCount}</span>
      </div>
    )
  }
});

export default PitchCount;
