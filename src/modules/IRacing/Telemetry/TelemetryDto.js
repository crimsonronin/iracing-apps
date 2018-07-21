// @flow
import type PedalsDto from 'src/modules/IRacing/Telemetry/Pedals/PedalsDto';
import type GearsDto from 'src/modules/IRacing/Telemetry/Gear/GearsDto';

export default class TelemetryDto {
    _pedals: PedalsDto;
    _gears: GearsDto;

    get pedals(): PedalsDto {
        return this._pedals;
    }

    set pedals(value: PedalsDto) {
        this._pedals = value;
    }

    get gears(): GearsDto {
        return this._gears;
    }

    set gears(value: GearsDto) {
        this._gears = value;
    }
}
