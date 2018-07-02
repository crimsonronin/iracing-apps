// @flow
import IRacingService from 'src/modules/IRacing/IRacingService';
import {OPTIONS} from 'src/modules/IRacing/IRacingServiceConstants';

/**
 * @type {IRacingService} iRacingService
 */
const iRacingService = new IRacingService(OPTIONS.SERVER);

export {iRacingService};
