// @flow
import get from 'lodash/get';
import {DATA_POINTS} from 'src/modules/IRacing/Telemetry/TelemetryConstants';
import PedalsDto from 'src/modules/IRacing/Telemetry/Pedals/PedalsDto';

export default class PedalsTelemetryMapper {
    convert(data: any): PedalsDto {
        // pedals telemetry
        const pedals = new PedalsDto();

        pedals.throttle = get(data, DATA_POINTS.THROTTLE);
        pedals.brake = get(data, DATA_POINTS.BRAKE);
        pedals.clutch = get(data, DATA_POINTS.CLUTCH);

        return pedals;
    }
}
