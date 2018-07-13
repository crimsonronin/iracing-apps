// @flow
import EventEmitter from 'events';
import WebSocketDao from 'src/modules/Utils/WebSocketDao';
import {OPTIONS} from 'src/modules/IRacing/IRacingServiceConstants';

export default class IRacingService extends EventEmitter {
    constructor(webSocketDao: WebSocketDao) {
        super();
        this._webSocketDao = webSocketDao;
    }

    connect(): void {
        this._webSocketDao.connect();
    }

    sendCommand(command: string, ...args: Array<any>): void {
        const request = {
            command,
            args
        };

        this._webSocketDao.send(JSON.stringify(request));
    }

    getData(requestParams: Array<any> = [], requestParamsOnce: Array<any> = []): void {
        const request = {
            fps: OPTIONS.FPS,
            readIbt: false,
            requestParams,
            requestParamsOnce
        };

        this._webSocketDao.send(JSON.stringify(request));
    }
}
