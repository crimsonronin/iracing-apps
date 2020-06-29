// @flow
import IRacingService from './../IRacing/IRacingService';
import {webSocketDao} from './../Utils/WebSocketDaoFactory';

/**
 * @type {IRacingService} iRacingService
 */
const iRacingService = new IRacingService(webSocketDao);

export {iRacingService};
