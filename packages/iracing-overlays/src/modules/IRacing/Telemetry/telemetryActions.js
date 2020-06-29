// @flow
import {OPTIONS} from './../IRacing/IRacingServiceConstants';
import {EVENTS} from './../IRacing/Telemetry/TelemetryConstants';
import {ACTIONS} from './../Utils/webSocketMiddleware';

export function initTelemetryData(fps: number = OPTIONS.FPS) {
    return {
        type: ACTIONS.SEND,
        payload: {
            fps,
            requestParams: [EVENTS.TELEMETRY]
        }
    };
}
