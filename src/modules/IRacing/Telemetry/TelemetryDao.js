// @flow

import EventEmitter from 'events';
import type IRacingService from 'src/modules/IRacing/IRacingService';
import {EVENTS} from 'src/modules/IRacing/Telemetry/TelemetryConstants';
import {EVENTS as SERVICE_EVENTS} from 'src/modules/IRacing/IRacingServiceConstants';
import PedalsDto from 'src/modules/IRacing/Telemetry/Pedals/PedalsDto';

export default class TelemetryDao extends EventEmitter {
    _iRacingService: IRacingService;

    /**
     * @param {IRacingService} iRacingService
     */
    constructor(iRacingService: IRacingService) {
        super();
        this._iRacingService = iRacingService;

        this._iRacingService.on(SERVICE_EVENTS.MESSAGE, (data) => {
            const {Throttle, Brake, Clutch} = data.data;

            const pedals = new PedalsDto();
            pedals.throttle = Throttle;
            pedals.brake = Brake;
            pedals.clutch = Clutch;

            this.emit(EVENTS.PEDALS, pedals);
        });
    }

    /**
     * Gets the pedal data
     */
    requestPedalData() {
        this._iRacingService.on(SERVICE_EVENTS.OPEN, () => {
            this._iRacingService.getData([EVENTS.TELEMETRY]);
        });
    }
}
