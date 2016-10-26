import _ from 'lodash';
import React from 'react';
import './Teams.css';

const Team = ({ team }) => (
  <li
    className="Team"
    style={{ backgroundImage: `url(${team.logo})`}}
  >{team.shortName}</li>
);

const Teams = React.createClass({
  getDefaultProps() {
    return {
      teams: [
        {
          name: "New York Yankees",
          shortName: "NYY",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Yankees_logo.svg",
        },
        {
          name: "New York Mets",
          shortName: "NYM",
          logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/New_York_Mets.svg",
        }
      ]
    }
  },
  render () {
    const { teams } = this.props;
    return (
      <ul className="Teams">
        {_.map(teams, (team, i)  => <Team team={team} key={i}/>)}
      </ul>
    );
  }
});

export default Teams;
