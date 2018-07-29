// @flow
import {withStyles} from '@material-ui/core/styles';
import Pedal from 'src/modules/IRacing/Telemetry/Pedals/components/Pedal';

const styles = (theme) => ({
    barColorPrimary: {
        backgroundColor: theme.palette.primary.main
    },
    colorPrimary: {
        // border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: 'inherit',
    }
});

export default withStyles(styles)(Pedal);
