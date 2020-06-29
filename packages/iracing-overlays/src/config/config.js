/* eslint-disable no-underscore-dangle */
import theme from './config/default-theme';
import {ENV} from './modules/Utils/ApplicationContstants';

const config = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

export default {
    env: config.IRACING_APP_API_ENV || ENV.DEVELOPMENT,
    api: {
        source: config.IRACING_APP_API_SOURCE || 'stub',
        endpoint: config.IRACING_APP_API_ENDPOINT || 'ws://127.0.0.1:8182/ws'
    },
    theme
};
