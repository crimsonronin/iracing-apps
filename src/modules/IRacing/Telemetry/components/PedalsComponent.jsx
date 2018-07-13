// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

type Props = {
    classes: any,
    throttle: number,
    brake: number,
    clutch: number,
    hasClutch: boolean,
};

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    pedal: {
        height: 20
    }
});

class PedalsComponent extends Component<Props> {
    render() {
        const {classes, throttle, brake, clutch, hasClutch} = this.props;
        return (
            <Grid container spacing={0} className={classes.root}>
                <Grid item xs={12}>
                    <LinearProgress className={classes.pedal} barColorPrimary="#eeeeee" variant="determinate" value={throttle}/>
                </Grid>
                <Grid item xs={12}>
                    <LinearProgress className={classes.pedal} variant="determinate" value={brake}/>
                </Grid>
                {hasClutch && (
                    <Grid item xs={12}>
                        <LinearProgress className={classes.pedal} variant="determinate" value={clutch}/>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default withStyles(styles)(PedalsComponent);
