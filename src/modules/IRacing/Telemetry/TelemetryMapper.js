// @flow
import TelemetryDto from 'src/modules/IRacing/Telemetry/TelemetryDto';
import type PedalsTelemetryMapper from 'src/modules/IRacing/Telemetry/Pedals/PedalsTelemetryMapper';
import GearsTelemetryMapper from './Gear/GearsTelemetryMapper';

export default class TelemetryMapper {
    _pedalsTelemetryMapper: PedalsTelemetryMapper;
    _gearsTelemetryMapper: GearsTelemetryMapper;

    constructor(pedalsTelemetryMapper: PedalsTelemetryMapper, gearsTelemetryMapper: GearsTelemetryMapper) {
        this._pedalsTelemetryMapper = pedalsTelemetryMapper;
        this._gearsTelemetryMapper = gearsTelemetryMapper;
    }

    convert(data: any): TelemetryDto {
        const telemetry = new TelemetryDto();

        telemetry.pedals = this._pedalsTelemetryMapper.convert(data);
        telemetry.gears = this._gearsTelemetryMapper.convert(data);

        return telemetry;
    }
}
