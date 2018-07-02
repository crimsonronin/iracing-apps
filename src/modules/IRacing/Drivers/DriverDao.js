// @flow

import {DATA} from 'src/modules/IRacing/IRacingServiceConstants';

export default class DriverDao {
    getDriverDetails(): void {
        this.getData([DATA.DRIVER_DETAILS], []);
    }
}
