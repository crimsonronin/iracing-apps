// @flow
import React, { Component } from 'react';
import BroadcastDetails from 'src/modules/IRacingBroadcast/BroadcastDetails';
import type DriverDto from 'src/modules/IRacing/Drivers/DriverDto';
import { iRacingService } from 'src/modules/IRacing/IRacingServiceFactory';
import { iRacingMessageMapper } from 'src/modules/IRacing/IRacingMessageMapperFactory';
import { CAMERAS, EVENTS } from 'src/modules/IRacing/IRacingServiceConstants';

type Props = {};
type State = {
    isLoading: boolean,
    camera: string | null,
    driver: DriverDto | null,
};

const INTERVAL = {
    UPDATE_UI: 30 * 1000,
    UPDATE_DRIVER: 30 * 1000,
    UPDATE_CAMERA: 30 * 1000,
    RECONNECT: 5 * 1000,
};
const CAMERA_ANGLES = [CAMERAS.CHASE, CAMERAS.TV_1];

export default class IRacingBroadcastContainer extends Component<Props, State> {
    state = {
        camera: null,
        driver: null,
        isLoading: true,
        hasHiddenUi: false,
        error: false,
    };

    componentDidMount() {
        // start the timers
        iRacingService.on(EVENTS.OPEN, () => {
            this._setStateAsync({ error: false, isLoading: false });
            this._init();
        });

        iRacingService.on(EVENTS.ERROR, (error) => {
            this._setStateAsync({ error, isLoading: false });
            // try reconnecting in x seconds
        });

        iRacingService.on(EVENTS.MESSAGE, (messageData) => {
            // parse messages
            const message = iRacingMessageMapper.convert(messageData);
            this._setStateAsync({ driver: message.currentDriver });
        });

        iRacingService.connect();
    }

    _init = () => {
        this._initUi();
        this._initDriverDetails();
        this._initCamera();
    };

    _initDriverDetails = () => {
        this._updateDriverDetails();
        setInterval(() => this._updateDriverDetails, INTERVAL.UPDATE_DRIVER);
    };

    _updateDriverDetails = () => {
        // get driver info
        iRacingService.getDriverDetails();
    };

    _initUi = () => {
        this._hideUi();
        setInterval(() => this._hideUi, INTERVAL.UPDATE_UI);
    };

    _hideUi = () => {
        // hide ui
        iRacingService.hideUi();
        this._setStateAsync({ hasHiddenUi: true });
    };

    _initCamera = () => {
        this._changeCamera();
        setInterval(() => this._changeCamera, INTERVAL.UPDATE_CAMERA);
    };

    _changeCamera = async () => {
        const { driver } = this.state;
        const cameraAngleIndex = Math.floor(Math.random() * CAMERA_ANGLES.length);
        const camera = CAMERA_ANGLES[cameraAngleIndex];
        await this._setStateAsync({ camera });

        iRacingService.changeCamera(camera, driver);
    };

    /**
     * @param {object} state
     * @return {Promise}
     * @private
     */
    async _setStateAsync(state: any): Promise<void> {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }

    render() {
        const { isLoading, driver, camera, hasHiddenUi, error } = this.state;

        if (isLoading) {
            return <div>Loading data</div>;
        } else if (error) {
            return <div>Failed to load data</div>;
        }

        return <BroadcastDetails driver={driver} camera={camera} hiddenUi={hasHiddenUi} />;
    }
}
