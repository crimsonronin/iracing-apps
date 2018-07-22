// @flow
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {UOM} from 'src/modules/IRacing/Telemetry/Speed/SpeedDto';

type Props = {
    classes: any,
    speed: number,
    uom: UOM,
};

// I'm not sure why, but the speed coming back from the telemetry is out by a factor of 3.61. So weird.
const SPEED_MODIFIER = 3.61;

const styles = () => ({
    card: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto'
    }
});

function Gears(props: Props) {
    const {speed = 0, uom = UOM.KPH, classes} = props;

    const formattedSpeed = parseInt(SPEED_MODIFIER * speed, 10);

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="headline">{formattedSpeed}</Typography>
                    <Typography variant="subheading">{uom}</Typography>
                </CardContent>
            </div>
        </Card>
    );
}

export default withStyles(styles)(Gears);
