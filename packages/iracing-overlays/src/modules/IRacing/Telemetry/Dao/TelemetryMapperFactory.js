// @flow
import TelemetryMapper from './../IRacing/Telemetry/Dao/TelemetryMapper';
import {pedalsTelemetryMapper} from './../IRacing/Telemetry/Pedals/PedalsTelemetryMapperFactory';
import {gearsTelemetryMapper} from './../IRacing/Telemetry/Gear/GearsTelemetryMapperFactory';
import {speedTelemetryMapper} from './../IRacing/Telemetry/Speed/SpeedTelemetryMapperFactory';

/**
 * @type {TelemetryMapper} telemetryMapper
 */
const telemetryMapper = new TelemetryMapper(
    pedalsTelemetryMapper,
    gearsTelemetryMapper,
    speedTelemetryMapper,
);

export {telemetryMapper};
