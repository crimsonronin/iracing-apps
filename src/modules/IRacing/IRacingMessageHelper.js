// @flow
import has from 'lodash/has';
import {DATA} from 'src/modules/IRacing/IRacingServiceConstants';

/**
 * @deprecated
 */
export default class IRacingMessageHelper {
    hasTelemetryData(data: Object): boolean {
        return has(data, DATA.TELEMETRY);
    }

    hasSessionData(data: Object): boolean {
        return has(data, DATA.SESSION);
    }

    hasQualifyingData(data: Object): boolean {
        return has(data, DATA.QUALIFYING);
    }
}
