// @flow
import {DATA} from './../IRacing/IRacingServiceConstants';
import {ACTIONS} from './../Utils/webSocketMiddleware';

export function getCurrentDriver() {
    return {
        type: ACTIONS.SEND,
        payload: {
            fps: 1,
            requestParams: [],
            requestParamsOnce: [DATA.DRIVER]
        }
    };
}
