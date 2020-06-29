// @flow
import WebSocketDao from './../Utils/WebSocketDao';
import config from './../../config/config';

/**
 * @type {WebSocketDao} webSocketDao
 */
const webSocketDao = new WebSocketDao(config.api.endpoint);

export {webSocketDao};
