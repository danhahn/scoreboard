import React, { Component } from 'react';
import './App.css';

import Bases from './components/Bases/Bases';
import Teams from './components/Teams/Teams';
import Score from './components/Score/Score';
import Outs from './components/Outs/Outs';
import Count from './components/Count/Count';
import Inning from './components/Inning/Inning';
import PitchCount from './containers/PitchCount/PitchCount';
import OsdPitchCount from './containers/osd/OsdPitchCount/OsdPitchCount';


class App extends Component {
  render() {
    return (
      <div className="App">
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

        <div className="osd">
          <OsdPitchCount></OsdPitchCount>
        </div>

      </div>
    );
  }
}

export default App;
