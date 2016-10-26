import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import './Bases.css';

const { array } =  React.PropTypes;

const Base = ({base}) => {
  var styles = classNames({
    'base': true,
    'baseActive': base.active,
  });
  return (
    <li
      className={styles}
      style={{ order: base.id }}
    >
      <span className="baseNumber"></span>
    </li>
  )
};

const Bases = React.createClass({
  getDefaultProps() {
    return {
      bases: [
        {
          id: 2,
          player: 'Darryl Strawberry',
          active: true,
          name: 'frist',
        },
        {
          id: 1,
          player: 'Keith Hernandez',
          active: false,
          name: 'second',
        },
        {
          id: 3,
          player: 'Lenny Dykstra',
          active: true,
          name: 'third',
        },
        {
          id: 4,
          player: 'Gary Carter',
          active: null,
          name: 'home',
        },
      ],
    };
  },
  propTypes: {
    bases: array,
  },
  render () {
    const { bases } = this.props;
    return (
      <div className="Bases">
        <ul className="bases">
          {_.map(bases, (base, i) => <Base base={base} key={i} />)}
        </ul>
      </div>
    )
  }
})

export default Bases;
