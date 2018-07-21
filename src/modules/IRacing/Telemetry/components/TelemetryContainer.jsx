// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initTelemetryData} from 'src/modules/IRacing/Telemetry/telemetryActions';
import Telemetry from 'src/modules/IRacing/Telemetry/components/Telemetry';
import {STATE_NAMESPACE as iracing, TYPES} from 'src/modules/IRacing/iRacingReducers';
import type TelemetryDto from '../TelemetryDto';

export const mapStateToProps = (state: any): { telemetry: TelemetryDto } => {
    const telemetry = state[iracing][TYPES.TELEMETRY];

    return {
        telemetry
    };
};

type Props = {
    telemetry: TelemetryDto,
    dispatch: any,
};

class TelemetryContainer extends Component<Props> {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(initTelemetryData());
    }

    render() {
        const {telemetry} = this.props;
        if (telemetry) {
            const {pedals} = telemetry;
            const {throttle = 0, brake = 0, clutch = 0} = pedals;

            return <Telemetry throttle={throttle} brake={brake} clutch={clutch}/>;
        }

        return null;
    }
}

export default connect(mapStateToProps)(TelemetryContainer);
