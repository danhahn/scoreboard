import React from 'react';
import './Score.css';

const Score = React.createClass({
  render () {
    return (
      <ul className="Score">
        <li className="score">2</li>
        <li className="score">3</li>
      </ul>
    )
  }
});

export default Score;
