// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TelemetryContainer from 'src/modules/IRacing/Telemetry/components/TelemetryContainer';
import {STATE_NAMESPACE} from 'src/modules/Utils/webSocketReducer';

export const mapStateToProps = (state: any) => ({
    isWebsocketConnected: state[STATE_NAMESPACE].isConnected
});

type Props = {
    isWebsocketConnected: boolean,
};

class GlobalContainer extends Component<Props> {
    render() {
        const {isWebsocketConnected} = this.props;

        if (isWebsocketConnected) {
            return <TelemetryContainer/>;
        }

        return null;
    }
}

export default connect(mapStateToProps)(GlobalContainer);
