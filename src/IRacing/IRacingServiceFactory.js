// @flow
import IRacingService from './IRacingService';
import { OPTIONS } from './IRacingServiceConstants';

/**
 * @type {IRacingService} iRacingService
 */
const iRacingService = new IRacingService(OPTIONS.SERVER);

export { iRacingService };
