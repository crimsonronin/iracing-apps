// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import withWebSocket from './../Utils/withWebSocket';
import withCurrentDriver from './../IRacing/Drivers/withCurrentDriver';
import {NAMESPACE, TYPES} from './../IRacing/iRacingReducers';
import connect from 'react-redux/es/connect/connect';
import {getCurrentSession} from './../IRacing/Session/Dao/sessionActions';
import type SessionDto from './../IRacing/Session/SessionDto';

export const mapStateToProps = (state: any) => ({
    currentSession: state[NAMESPACE][TYPES.SESSION]
});

type Props = {
    dispatch: any,
    currentSession: SessionDto,
};

const withCurrentSession = (WrappedComponent: Component) => {
    return class WithCurrentSession extends Component<Props> {
        componentDidMount() {
            const {dispatch, currentSession} = this.props;
            if (!currentSession) {
                dispatch(getCurrentSession());
            }
        }

        render() {
            const {currentSession, ...rest} = this.props;
            if (currentSession) {
                return <WrappedComponent currentSession={currentSession} {...rest} />;
            }

            return <div>Waiting for session data...</div>;
        }
    };
};

export default compose(connect(mapStateToProps), withWebSocket, withCurrentDriver, withCurrentSession);


