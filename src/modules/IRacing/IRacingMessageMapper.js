// @flow
import get from 'lodash/get';
import has from 'lodash/has';
import find from 'lodash/find';
import MessageDto from 'src/modules/IRacing/MessageDto';
import {DATA} from 'src/modules/IRacing/IRacingServiceConstants';
import type IRacingDriverMapper from 'src/modules/IRacing/Drivers/IRacingDriverMapper';

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
            const {Drivers, DriverUserID} = driverData;

            message.drivers = this._iRacingDriverMapper.convert(Drivers);
            message.currentDriver = this._getCurrentDriver(DriverUserID, message.drivers);
        }

        return message;
    }

    _getCurrentDriver(id, drivers) {
        return find(drivers, (driver) => driver.id === id);
    }
}
