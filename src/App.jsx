// @flow
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import config from 'src/config/config';
import {store} from 'src/modules/Store/StoreFactory';
import GlobalContainer from 'src/modules/Scenes/GlobalContainer';
import {ACTIONS} from './modules/Utils/webSocketMiddleware';

class App extends Component {
    render() {
        const {theme: themeConfig} = config;
        const theme = createMuiTheme(themeConfig);

        store.dispatch({type: ACTIONS.CONNECT});
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <GlobalContainer/>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
