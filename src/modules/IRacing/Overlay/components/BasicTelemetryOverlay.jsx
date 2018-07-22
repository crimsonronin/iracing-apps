// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Telemetry from 'src/modules/IRacing/Telemetry/components/Telemetry';
import GearList from 'src/modules/IRacing/Telemetry/Gear/components/GearList';
import Speed from 'src/modules/IRacing/Telemetry/Speed/components/Speed';
import type TelemetryDto from '../../Telemetry/TelemetryDto';
import withTelemetry from 'src/modules/IRacing/Telemetry/withTelemetry';

type Props = {
    telemetry: TelemetryDto,
    classes: any,
};

const styles = () => ({
    root: {
        flexGrow: 1
    },
    row1: {
        display: 'flex',
    }
});

export class BasicTelemetryOverlay extends Component<Props> {
    render() {
        const {telemetry, classes} = this.props;
        const {pedals, gears, speed} = telemetry;

        return (
            <Grid container spacing={0}>
                <Grid container spacing={0} className={classes.row1}>
                    <Grid spacing={0} xs={3}>
                        <Paper className={classes.gears}>
                            <Speed speed={speed.speed} uom={speed.uom}/>
                        </Paper>
                    </Grid>
                    <Grid spacing={0} item xs={9}>
                        <Paper className={classes.pedals}>
                            <Telemetry throttle={pedals.throttle} brake={pedals.brake} clutch={pedals.clutch}/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid spacing={0} xs={12}>
                        <Paper className={classes.gears}>
                            <GearList currentGear={gears.currentGear} gears={gears.allGears}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(withTelemetry(BasicTelemetryOverlay));
