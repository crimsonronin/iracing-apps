// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import TelemetryContainer from 'src/modules/IRacing/Telemetry/components/TelemetryContainer';

type Props = {
    classes: any,
};

const styles = () => ({
    root: {
        flexGrow: 1
    }
});

class BasicTelemetryOverlay extends Component<Props> {
    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={0} className={classes.root}>
                <TelemetryContainer/>
            </Grid>
        );
    }
}

export default withStyles(styles)(BasicTelemetryOverlay);
