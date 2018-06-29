// @flow
import React from 'react';
import type DriverDto from '../IRacing/DriverDto';

type Props = {
    driver: DriverDto,
    camera: string,
    hiddenUi: boolean,
};

export default function BroadcastDetails(props: Props) {
    const { driver, camera, hiddenUi } = props;

    return (
        <div>
            <p>Hidden UI: {hiddenUi ? 'Yes' : 'No'}</p>
            <p>Currently displaying camera: {camera || 'NA'}</p>
            <p>Currently displaying driver: {driver ? driver.userName : 'NA'}</p>
        </div>
    );
}
