// @flow
import {combineReducers} from 'redux';
import {STATE_NAMESPACE as websocket, webSocketReducer} from 'src/modules/Utils/webSocketReducer';
import {iRacingReducers, STATE_NAMESPACE as iracing} from 'src/modules/IRacing/iRacingReducers';

export const reducers = combineReducers({
    [websocket]: webSocketReducer,
    [iracing]: iRacingReducers
});
