// @flow
import get from 'lodash/get';
import has from 'lodash/has';
import find from 'lodash/find';
import MessageDto from './MessageDto';
import { DATA } from './IRacingServiceConstants';

export default class IRacingMessageMapper {
    _iRacingDriverMapper: IRacingDriverMapper;

    constructor(iRacingDriverMapper: IRacingDriverMapper) {
        this._iRacingDriverMapper = iRacingDriverMapper;
    }

    convert(messageData: any) {
        const data = get(messageData, 'data');
        const message = new MessageDto();

        if (has(data, DATA.DRIVER_DETAILS)) {
            // driver data mapper
            const driverData = get(data, DATA.DRIVER_DETAILS);
            message.drivers = this._iRacingDriverMapper.convert(driverData.Drivers);
            message.currentDriver = this._getCurrentDriver(driverData.DriverUserID, message.drivers);
        }

        return message;
    }

    _getCurrentDriver(id, drivers) {
        return find(drivers, (driver) => driver.id === id);
    }
}
