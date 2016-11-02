import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import './Bases.css';

const { object } =  React.PropTypes;

const Base = ({base, order}) => {
  const styles = classNames({
    'base': true,
    'baseActive': base,
  });
  return (
    <li
      className={styles}
      style={{ order }}
    >
      <span className="baseNumber"></span>
    </li>
  )
};

const Bases = React.createClass({
  getDefaultProps() {
    return {
      bases: {
        firstBase: true,
        secondBase: true,
        thirdBase: true,
      },
    };
  },
  propTypes: {
    bases: object,
  },
  render () {
    const { bases, style } = this.props;
    return (
      <div className="Bases" style={style}>
        <ul className="bases">
          <Base order={2} base={bases.firstBase} />
          <Base order={1} base={bases.secondBase} />
          <Base order={3} base={bases.thirdBase} />
        </ul>
      </div>
    )
  }
})

export default Bases;
