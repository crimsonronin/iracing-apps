// @flow
import React, { Component } from 'react';
import IRacingBroadcastContainer from './IRacingBroadcast/IRacingBroadcastContainer';

class App extends Component {
    render() {
        return (
            <div>
                <h1>iRacing Camera Rotator</h1>
                <IRacingBroadcastContainer />
            </div>
        );
    }
}

export default App;
