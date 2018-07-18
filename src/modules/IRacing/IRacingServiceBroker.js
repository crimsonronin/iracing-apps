// @flow
import EventEmitter from 'events';
import WebSocketDao from 'src/modules/Utils/WebSocketDao';

export default class IRacingServiceBroker extends EventEmitter {
    _events: string[];
    _webSocketDao: WebSocketDao;

    constructor(webSocketDao: WebSocketDao, events: string[] = []) {
        super();
        this._events = events;
        this._webSocketDao = webSocketDao;
    }

    start() {
        this._events.forEach((event) => {
            console.info(`Now listening to ${event.length} events`)
        });
    }
}
