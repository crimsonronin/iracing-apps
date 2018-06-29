// @flow
import EventEmitter from 'events';
import {COMMANDS, DATA, EVENTS, OPTIONS} from 'src/IRacing/IRacingServiceConstants';

export default class IRacingService extends EventEmitter {
    _ws: WebSocket;
    _server: string;
    _isConnected: boolean = false;
    _autoReconnectInterval: number = 5 * 1000;

    constructor(server: string) {
        super();
        this._server = `ws://${server}/ws`;
    }

    connect(): void {
        if (!this._isConnected && this._server) {
            this._ws = new WebSocket(this._server);

            this._ws.onopen = () => {
                console.info('WebSocketClient: connected');
                this._isConnected = true;
                this.emit(EVENTS.OPEN);
            };

            this._ws.onmessage = (message: any) => {
                if (message.data) {
                    this.emit(EVENTS.MESSAGE, JSON.parse(message.data));
                } else {
                    this.emit(EVENTS.ERROR, `Does not contain message data: ${message}`);
                }
            };

            this._ws.onerror = (event: Event) => {
                switch (event.code) {
                    case 'ECONNREFUSED':
                        console.info('WebSocketClient: closed');
                        this.reconnect();
                        break;
                    default:
                        this.emit(EVENTS.ERROR, event);
                        break;
                }
            };

            this._ws.onclose = (event: Event) => {
                switch (event.code) {
                    case 1000:
                        this.emit(EVENTS.CLOSED, event);
                        break;
                    default:
                        console.info('WebSocketClient: closed');
                        this.reconnect();
                        break;
                }
            };
        }
    }

    reconnect(): void {
        delete this._ws.onopen;
        delete this._ws.onmessage;
        delete this._ws.onerror;
        delete this._ws.onclose;

        setTimeout(() => {
            console.info('WebSocketClient: reconnecting...');
            this.connect();
        }, this._autoReconnectInterval);
    }

    sendCommand(command: string, ...args: Array<any>): void {
        const request = {
            command,
            args,
        };
        this._ws.send(JSON.stringify(request));
    }

    hideUi(): void {
        this.sendCommand(COMMANDS.CAMERA_SET_STATE, 8);
    }

    changeCamera(camera: number, driver: ?DriverDto): void {
        if (driver) {
            this.sendCommand(COMMANDS.CHANGE_CAMERA_DRIVER, driver ? driver.carNumber : 0, camera, 0);
        } else {
            this.sendCommand(COMMANDS.CHANGE_CAMERA_POSITION, 0, camera, 0);
        }
    }

    getDriverDetails(): void {
        this.getData([DATA.DRIVER_DETAILS], []);
    }

    getData(requestParams: Array<any> = [], requestParamsOnce: Array<any> = []): void {
        const request = {
            fps: OPTIONS.FPS,
            readIbt: false,
            requestParams,
            requestParamsOnce,
        };

        this._ws.send(JSON.stringify(request));
    }
}
