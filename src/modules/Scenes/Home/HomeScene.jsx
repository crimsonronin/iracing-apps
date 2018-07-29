// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from 'src/components/Header';

type Props = {
    classes: any,
};

const styles = {
    root: {
        flexGrow: 1
    }
};

function HomeScene(props: Props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(HomeScene);
