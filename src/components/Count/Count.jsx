import React from 'react';
import './Count.css';

const Count = React.createClass({
  getDefaultProps() {
    return {
      count: {
        ball: 1,
        strike: 2,
      }
    }
  },
  render () {
    const { count } = this.props;
    return (
      <ul className="Count">
        <span className="balls">{count.ball}</span>
        <span>-</span>
        <span className="strikes">{count.strike}</span>
      </ul>
    );
  }
});

export default Count;
