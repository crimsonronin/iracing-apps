// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Gear from 'src/modules/IRacing/Telemetry/Gear/components/Gear';


type Props = {
    classes: any,
    currentGear: string | number,
    allGears: (string | number)[],
};

const styles = () => ({
    root: {
        flexGrow: 1
    },
    tabsIndicator: {

        backgroundColor: '#1890ff'
    }
});

function GearList(props: Props) {
    const {classes, currentGear, allGears = ['R', 'N', 1, 2, 3, 4, 5, 6, 7]} = props;

    const gearList = allGears.map((gear) => <Gear key={gear} gear={gear}/>);

    if (allGears && allGears.length > 0) {
        const value = allGears.indexOf(currentGear);

        return (
            <Tabs
                value={value !== -1 ? value : 1}
                indicatorColor="secondary"
                textColor="secondary"
                fullWidth
                classes={{indicator: classes.tabsIndicator}}
            >
                {gearList}
            </Tabs>
        );
    }

    return null;
}

export default withStyles(styles)(GearList);
