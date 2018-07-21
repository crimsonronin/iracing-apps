// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PedalsTelemetry from 'src/modules/IRacing/Telemetry/Pedals/components/PedalsTelemetry';

type Props = {
    throttle: number,
    brake: number,
    clutch: number,
};

const styles = {
    root: {
        flexGrow: 1
    }
};

function Telemetry(props: Props) {
    const {throttle, brake, clutch} = props;
    return (
        <PedalsTelemetry
            throttle={throttle}
            brake={brake}
            clutch={clutch}
        />
    );
}

export default withStyles(styles)(Telemetry);
