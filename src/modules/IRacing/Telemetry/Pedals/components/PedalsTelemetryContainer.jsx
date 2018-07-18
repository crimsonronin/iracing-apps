// @flow
import React, {Component} from 'react';
import HomeScene from 'src/modules/Scenes/Home/HomeScene';
import {iRacingService} from 'src/modules/IRacing/IRacingServiceFactory';

type Props = {};
type State = {
    throttle: number,
    brake: number,
    clutch: number,
};

export default class PedalsTelemetryContainer extends Component<Props, State> {
    componentDidMount() {
        // TODO, move this somewhere else since it might be called a number of times
        iRacingService.getData();
    }

    render() {
        return <HomeScene/>;
    }
}
