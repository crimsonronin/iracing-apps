// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Pedal from 'src/modules/IRacing/Telemetry/Pedals/components/Pedal';
import Throttle from 'src/modules/IRacing/Telemetry/Pedals/components/Throttle';
import Brake from 'src/modules/IRacing/Telemetry/Pedals/components/Brake';
import {withStyles} from '@material-ui/core/styles';

type Props = {
    classes: any,
    throttle: number,
    brake: number,
    clutch?: number,
    hasClutch?: boolean,
};

const styles = () => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    pedal: {
        height: 25
    }
});

class PedalsTelemetry extends Component<Props> {
    render() {
        const {classes, throttle, brake, clutch, hasClutch = false} = this.props;
        return (
            <Grid container spacing={0} className={classes.root}>
                <Grid item={12} className={classes.root}>
                    <Throttle
                        value={throttle * 100}
                    />
                    <Brake
                        value={brake * 100}
                    />

                    {hasClutch && clutch && (
                        <Pedal value={clutch}/>
                    )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PedalsTelemetry);
