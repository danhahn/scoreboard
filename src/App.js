import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Bases from './components/Bases/Bases';
import Teams from './components/Teams/Teams';
import Score from './components/Score/Score';
import Outs from './components/Outs/Outs';
import Count from './containers/Count/Count';
import Inning from './components/Inning/Inning';
import PitchCount from './containers/PitchCount/PitchCount';
import OsdPitchCount from './containers/osd/OsdPitchCount/OsdPitchCount';
import OsdCount from './containers/osd/OsdCount/OsdCount';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="scoreboard">
          <div className="scoreBox"
            style={{display: 'flex'}}
            >
            <Teams/>
            <Score/>
          </div>
          <div className="infoBox">
            <Bases/>
            <PitchCount/>
            <Outs/>
            <Inning/>
            <Count/>
          </div>
        </div>

        <div className="osd">
          <OsdPitchCount></OsdPitchCount>
          <OsdCount></OsdCount>
        </div>

      </div>
    );
  }
}

export default App;
