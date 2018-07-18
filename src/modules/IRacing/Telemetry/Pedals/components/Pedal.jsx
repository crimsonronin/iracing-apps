// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';


type Props = {
    classes: any,
    color: any,
    value: number,
};

const styles = () => ({
    root: {
        flexGrow: 1,
        height: 20,
        margin: '5px 0'
    },
    bar: {
        height: 20
    }
});

function Pedal(props: Props) {
    const {value, color, classes} = props;

    return (
        <LinearProgress
            classes={{...classes}}
            color={color}
            variant="determinate"
            value={value}
        >
            <Typography>Text</Typography>
        </LinearProgress>
    );
}

export default withStyles(styles)(Pedal);
