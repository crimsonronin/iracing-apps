// @flow
import React from 'react';
import Tab from '@material-ui/core/Tab';
import {withStyles} from '@material-ui/core/styles';

type Props = {
    classes: any,
    gear: string | number,
};

const styles = (theme) => ({
    tabRoot: {
        minWidth: 20,
    },
    tabSelected: {
        backgroundColor: '#000'
    }
});

function Gears(props: Props) {
    const {gear, classes} = props;

    return (
        <Tab
            label={gear}
            value={gear}
            classes={{root: classes.tabRoot, selected: classes.tabSelected}}
        />
    );
}

export default withStyles(styles)(Gears);
