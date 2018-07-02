// @flow
import type DriverDto from 'src/modules/IRacing/Drivers/DriverDto';

export default class MessageDto {
    _currentDriver: DriverDto;
    _drivers: Array<DriverDto>;

    get currentDriver(): DriverDto {
        return this._currentDriver;
    }

    set currentDriver(value: DriverDto) {
        this._currentDriver = value;
    }

    get drivers(): Array<DriverDto> {
        return this._drivers;
    }

    set drivers(value: Array<DriverDto>) {
        this._drivers = value;
    }
}
