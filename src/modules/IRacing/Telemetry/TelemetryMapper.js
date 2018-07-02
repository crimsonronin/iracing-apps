// @flow
import get from 'lodash/get';
import has from 'lodash/has';
import find from 'lodash/find';
import TelemetryDto from 'src/modules/IRacing/Telemetry/TelemetryDto';
import {DATA_POINTS} from 'src/modules/IRacing/Telemetry/TelemetryConstants';

export default class IRacingMessageMapper {
    _iRacingDriverMapper: IRacingDriverMapper;

    constructor(iRacingDriverMapper: IRacingDriverMapper) {
        this._iRacingDriverMapper = iRacingDriverMapper;
    }

    convert(messageData: any): TelemetryDto {
        const data = get(messageData, 'data');
        const telemetry = new TelemetryDto();

        if (has(data, DATA_POINTS)) {
            // driver data mapper
            const driverData = get(data, DATA.DRIVER_DETAILS);
            const {Drivers, DriverUserID} = driverData;

            telemetry.drivers = this._iRacingDriverMapper.convert(Drivers);
            telemetry.currentDriver = this._getCurrentDriver(DriverUserID, telemetry.drivers);
        }

        return telemetry;
    }

    _getCurrentDriver(id, drivers) {
        return find(drivers, (driver) => driver.id === id);
    }
}
