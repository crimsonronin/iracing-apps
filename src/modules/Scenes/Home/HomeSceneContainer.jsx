// @flow
import React, {Component} from 'react';
import HomeScene from 'src/modules/Scenes/Home/HomeScene';
import {iRacingService} from 'src/modules/IRacing/IRacingServiceFactory';

type Props = {};
type State = {};

export default class HomeSceneContainer extends Component<Props, State> {
    componentDidMount() {
        iRacingService.connect();
    }

    render() {
        return <HomeScene/>;
    }
}
