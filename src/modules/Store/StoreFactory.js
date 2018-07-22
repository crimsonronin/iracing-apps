// @flow
import {applyMiddleware, compose, createStore} from 'redux';
import {reducers} from 'src/modules/Store/ReducerFactory';
import thunk from 'redux-thunk';
import {webSocketMiddleware} from 'src/modules/Utils/webSocketMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk, webSocketMiddleware);
export const store = createStore(reducers, /* preloadedState, */ composeEnhancers(middleware));
