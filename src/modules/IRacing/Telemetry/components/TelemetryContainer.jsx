// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {initTelemetryData} from 'src/modules/IRacing/Telemetry/telemetryActions';
import Telemetry from 'src/modules/IRacing/Telemetry/components/Telemetry';
import GearList from 'src/modules/IRacing/Telemetry/Gear/components/GearList';
import {STATE_NAMESPACE as iracing, TYPES} from 'src/modules/IRacing/iRacingReducers';
import type TelemetryDto from 'src/modules/IRacing/Telemetry/TelemetryDto';
import {withStyles} from '@material-ui/core/styles/index';

export const mapStateToProps = (state: any): { telemetry: TelemetryDto } => {
    const telemetry = state[iracing][TYPES.TELEMETRY];

    return {
        telemetry
    };
};

type Props = {
    telemetry: TelemetryDto,
    classes: any,
    dispatch: any,
};

const styles = () => ({
    root: {},
    pedals: {
        flexGrow: 1,
        width: 500,
        padding: `5px 10px`,
        margin: `10px 0`
    },
    gears: {
        flexGrow: 1,
        width: 500,
        margin: `10px 0`
    }
});

class TelemetryContainer extends Component<Props> {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(initTelemetryData());
    }

    render() {
        const {telemetry, classes} = this.props;
        if (telemetry) {
            const {pedals, gears} = telemetry;
            const {throttle = 0, brake = 0, clutch = 0} = pedals;
            const {currentGear, allGears} = gears;

            return (
                <Grid container spacing={0}>
                    <Grid container spacing={0}>
                        <Paper className={classes.pedals}>
                            <Telemetry throttle={throttle} brake={brake} clutch={clutch}/>
                        </Paper>
                    </Grid>
                    <Grid container spacing={0}>
                        <Paper className={classes.gears}>
                            <GearList currentGear={currentGear} gears={allGears}/>
                        </Paper>
                    </Grid>
                </Grid>
            );
        }

        return null;
    }
}

export default connect(mapStateToProps)(withStyles(styles)(TelemetryContainer));
