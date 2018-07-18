// @flow
import TelemetryDao from 'src/modules/IRacing/Telemetry/TelemetryDao';
import {iRacingService} from 'src/modules/IRacing/IRacingServiceFactory';

/**
 * @type {TelemetryDao} telemetryDao
 */
const telemetryDao = new TelemetryDao(iRacingService);

export {telemetryDao};
