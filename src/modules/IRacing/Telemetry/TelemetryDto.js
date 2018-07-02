// @flow
import type PedalsDto from 'src/modules/Iracing/Telemetry/PedalsDto';

export default class TelemetryDto {
    _pedals: PedalsDto;

    get pedals(): PedalsDto {
        return this._pedals;
    }

    set pedals(value: PedalsDto) {
        this._pedals = value;
    }
}
