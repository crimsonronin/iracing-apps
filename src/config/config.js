/* eslint-disable no-underscore-dangle */
import theme from 'src/config/default-theme';

const config = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

export default {
    api: {
        source: config.IRACING_APP_API_SOURCE || 'stub',
        endpoint: config.IRACING_APP_API_ENDPOINT || 'ws://127.0.0.1:8182/ws'
    },
    theme
};
