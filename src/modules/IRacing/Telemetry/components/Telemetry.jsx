// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from 'src/components/Header';
import PedalsTelemetry from 'src/modules/IRacing/Telemetry/Pedals/components/PedalsTelemetry';

type Props = {
    classes: any,
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
    const {classes, throttle, brake, clutch} = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <PedalsTelemetry
                        throttle={throttle}
                        brake={brake}
                        clutch={clutch}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Telemetry);
