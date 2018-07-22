import {ACTIONS} from '../Utils/webSocketMiddleware';
import {telemetryMapper} from 'src/modules/IRacing/Telemetry/TelemetryMapperFactory';

export const TYPES = {
    CAMERA: 'camera',
    RADIO: 'radio',
    TELEMETRY: 'telemetry',
    DRIVER: 'driver',
    SESSION: 'session',
    WEEKEND: 'weekend'
};

export const NAMESPACE = 'iracing';

export const iRacingReducers = (state = {}, action) => {
    const {payload} = action;

    // look at the data and try to figure out what it is.
    if (action.type === ACTIONS.MESSAGE) {
        const {data} = payload;

        // TODO check what type of data it is
        return {
            ...state,
            [TYPES.TELEMETRY]: telemetryMapper.convert(data)
        };
    }

    return state;
};
