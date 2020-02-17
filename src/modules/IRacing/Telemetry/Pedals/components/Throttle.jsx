// @flow
import {withStyles} from '@material-ui/core/styles';
import Pedal from 'src/modules/IRacing/Telemetry/Pedals/components/Pedal';

const styles = (theme) => ({
    barColorPrimary: {
        backgroundColor: theme.palette.primary.main
    },
    colorPrimary: {
        backgroundColor: 'rgba(0,0,0,0.30)',
    }
});

export default withStyles(styles)(Pedal);
