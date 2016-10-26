import React from 'react';

import top from './top.svg';
import bottom from './bottom.svg';
import './Inning.css';

const Inning = React.createClass({
  getDefaultProps() {
    return {
      status: 'top',
      inning: 4,
    }
  },
  render () {
    const { status, inning } = this.props;
    return (
      <div className="Inning">
        <div className="top">
          {status === 'top' ? <img src={top} alt=""/> : null}
        </div>
        <div className="inning">{inning}</div>
        <div className="bottom">
          {status === 'bottom' ? <img src={bottom} alt=""/> : null}
        </div>
      </div>
    );
  }
});

export default Inning;
