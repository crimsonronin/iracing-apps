// @flow
import {OPTIONS} from '../IRacingServiceConstants';
import {EVENTS} from './TelemetryConstants';
import {ACTIONS} from '../../Utils/webSocketMiddleware';

export function initTelemetryData(fps: number = OPTIONS.FPS) {
    return {
        type: ACTIONS.SEND,
        payload: {
            fps,
            requestParams: [EVENTS.TELEMETRY]
        }
    };
};
