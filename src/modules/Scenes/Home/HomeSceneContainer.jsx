// @flow
import React, {Component} from 'react';
import HomeScene from 'src/modules/Scenes/Home/HomeScene';
import {iRacingService} from 'src/modules/IRacing/IRacingServiceFactory';
import {telemetryDao} from 'src/modules/IRacing/Telemetry/TelemetryDaoFactory';
import {EVENTS} from 'src/modules/IRacing/Telemetry/TelemetryConstants';
import type PedalsDto from 'src/modules/IRacing/Telemetry/Pedals/PedalsDto';

type Props = {};
type State = {
    throttle: number,
    brake: number,
    clutch: number
}
export default class HomeSceneContainer extends Component<Props, State> {
    state = {
        throttle: 0,
        brake: 0,
        clutch: 0
    };

    componentDidMount() {
        // TODO, move this somewhere else since it might be called a number of times
        iRacingService.connect();
        telemetryDao.on(EVENTS.PEDALS, (pedals: PedalsDto) => {
            this.setState({
                throttle: pedals.throttle,
                brake: pedals.brake,
                clutch: pedals.clutch
            });
        });
        telemetryDao.requestPedalData();
    }

    render() {
        const {throttle = 0, brake = 0, clutch = 0} = this.state;
        return <HomeScene throttle={throttle} brake={brake} clutch={clutch}/>;
    }
}
