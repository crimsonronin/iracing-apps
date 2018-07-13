// @flow
import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import HomeSceneContainer from 'src/modules/Scenes/Home/HomeSceneContainer';
import config from 'src/config/config';

class App extends Component {
    render() {
        const {theme: themeConfig} = config;
        const theme = createMuiTheme(themeConfig);

        return (
            <MuiThemeProvider theme={theme}>
                <HomeSceneContainer/>
            </MuiThemeProvider>
        );
    }
}

export default App;
