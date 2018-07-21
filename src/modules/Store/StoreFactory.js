// @flow
import {applyMiddleware, createStore} from 'redux';
import {reducers} from 'src/modules/Store/ReducerFactory';
import thunk from 'redux-thunk';
import {webSocketMiddleware} from 'src/modules/Utils/webSocketMiddleware';

const middleware = applyMiddleware(thunk, webSocketMiddleware);
export const store = createStore(reducers, {}, middleware);
