// @flow
import IRacingServiceBroker from 'src/modules/IRacing/IRacingServiceBroker';
import {webSocketDao} from 'src/modules/Utils/WebSocketDaoFactory';

/**
 * @type {IRacingServiceBroker} iRacingServiceBroker
 */
const iRacingServiceBroker = new IRacingServiceBroker(webSocketDao);

export {iRacingServiceBroker};
