// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
        flexGrow: 1
    },
    pedal: {
        height: 20
    }
});

class PedalsTelemetry extends Component<Props> {
    render() {
        const {classes, throttle, brake, clutch, hasClutch = false} = this.props;
        return (
            <Grid container spacing={0} className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="subheading" align="left">
                        Throttle
                        <Throttle
                            value={throttle * 100}
                        />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subheading" align="left">
                        Brake
                        <Brake
                            value={brake * 100}
                        />
                    </Typography>
                </Grid>

                {hasClutch && clutch && (
                    <Grid item xs={12}>
                        <Pedal value={clutch}/>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default withStyles(styles)(PedalsTelemetry);
