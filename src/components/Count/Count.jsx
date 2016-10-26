import React from 'react';
import './Count.css';

const Count = React.createClass({
  getDefaultProps() {
    return {
      balls: 1,
      strikes: 2,
    }
  },
  render () {
    const { balls, strikes } = this.props;
    return (
      <ul className="Count">
        <span className="balls">{balls}</span>
        <span>-</span>
        <span className="strikes">{strikes}</span>
      </ul>
    );
  }
});

export default Count;
