import React from 'react';
import classNames from 'classnames';
import './Outs.css';

const totalOuts = 3;

const Outs = React.createClass({
  getDefaultProps() {
    return {
      outs: 1,
    }
  },
  render () {

    const { outs:currentOuts } = this.props;

    const outs=[];

    for(let i = 1; i < totalOuts; i++) {
      var styles = classNames({
        'out': true,
        'active': i <= currentOuts,
      });
      outs.push(<li className={styles} key={i}></li>);
    }

    return (
      <ul className="Outs">
        {outs}
      </ul>
    )
  }
});

export default Outs;
