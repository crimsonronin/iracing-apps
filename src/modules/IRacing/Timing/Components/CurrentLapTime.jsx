// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withCurrentLap from 'src/modules/IRacing/Timing/withCurrentLap';
import type DriverDto from 'src/modules/IRacing/Drivers/DriverDto';

type Props = {
    currentDriver: DriverDto,
};

const styles = {
    root: {
        flexGrow: 1
    }
};

function CurrentLapTime(props: Props) {
    const {currentDriver} = props;
    return (
        <div>
            Current driver: {currentDriver.username}
        </div>
    );
}

export default withStyles(styles)(withCurrentLap(CurrentLapTime));
