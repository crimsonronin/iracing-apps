// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import type DriverDto from 'src/modules/IRacing/Drivers/DriverDto';
import withCurrentDriver from 'src/modules/IRacing/Drivers/withCurrentDriver';

type Props = {
    dispatch: any,
    currentDriver: DriverDto,
};

const withCurrentLap = (WrappedComponent: Component) => {
    return class WithCurrentLap extends Component<Props> {
        render() {
            const {currentDriver, ...rest} = this.props;
            if (currentDriver) {
                return <WrappedComponent currentDriver={currentDriver} {...rest} />;
            }

            return <div>Waiting for driver data...</div>;
        }
    };
};

export default compose(withWebSocket, withCurrentDriver, withCurrentLap);


