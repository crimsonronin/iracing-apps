// @flow
import TelemetryMapper from 'src/modules/IRacing/Telemetry/TelemetryMapper';
import {pedalsTelemetryMapper} from 'src/modules/IRacing/Telemetry/Pedals/PedalsTelemetryMapperFactory';
import {gearsTelemetryMapper} from 'src/modules/IRacing/Telemetry/Gear/GearsTelemetryMapperFactory';

/**
 * @type {TelemetryMapper} telemetryMapper
 */
const telemetryMapper = new TelemetryMapper(
    pedalsTelemetryMapper,
    gearsTelemetryMapper
);

export {telemetryMapper};
