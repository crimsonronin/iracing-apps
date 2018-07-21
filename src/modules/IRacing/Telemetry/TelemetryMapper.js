// @flow
import get from 'lodash/get';
import TelemetryDto from 'src/modules/IRacing/Telemetry/TelemetryDto';
import {DATA_POINTS} from 'src/modules/IRacing/Telemetry/TelemetryConstants';
import PedalsDto from './Pedals/PedalsDto';

export default class TelemetryMapper {
    convert(data: any): TelemetryDto {
        const telemetry = new TelemetryDto();

        // pedals telemetry
        const pedals = new PedalsDto();

        pedals.throttle = get(data, DATA_POINTS.THROTTLE);
        pedals.brake = get(data, DATA_POINTS.BRAKE);
        pedals.clutch = get(data, DATA_POINTS.CLUTCH);

        telemetry.pedals = pedals;

        return telemetry;
    }
}
