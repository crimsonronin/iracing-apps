// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Pedal from 'src/modules/IRacing/Telemetry/Pedals/components/Pedal';
import Throttle from 'src/modules/IRacing/Telemetry/Pedals/components/Throttle';
import Brake from 'src/modules/IRacing/Telemetry/Pedals/components/Brake';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type Props = {
    classes: any,
    throttle: number,
    brake: number,
    clutch?: number,
    hasClutch?: boolean,
};

const styles = () => ({
    root: {
        width: '100%',
        height: '100%',
        padding: '24px'
    },
    throttle: {
        height: '100%'
    },
    brake: {},
    throttleContainer: {
        marginBottom: 20,
    },
    pedalLabelContainer: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
    brakeContainer: {
    },
    pedalLabel: {
        color: '#fff',
        // transform: 'rotate(-90deg)',
        // '-webkit-transform': 'rotate(-90deg)',
        // '-moz-transform': 'rotate(-90deg)',
        textTransform: 'uppercase',
        textAlign: 'left',
        position: 'relative',
        fontSize: '4vw',
        lineHeight: '4vw'
    }
});

class PedalsTelemetry extends Component<Props> {
    render() {
        const {classes, throttle, brake, clutch, hasClutch = false} = this.props;
        return (
            <Grid container spacing={0} className={classes.root}>
                <Grid container spacing={0} className={classes.throttleContainer}>
                    <Grid item xs={4} className={classes.pedalLabelContainer}>
                        <Typography variant="subheading" className={classes.pedalLabel}>Throttle</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Throttle
                            classes={{root: classes.throttle}}
                            value={throttle * 100}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.brakeContainer}>
                    <Grid item xs={4}>
                        <Typography variant="subheading" className={classes.pedalLabel}>Brake</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Brake
                            classes={{root: classes.throttle}}
                            value={brake * 100}
                        />
                    </Grid>
                </Grid>
                {hasClutch && clutch && (
                    <Grid item xs={12} className={classes.root}>
                        <Pedal value={clutch}/>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default withStyles(styles)(PedalsTelemetry);
